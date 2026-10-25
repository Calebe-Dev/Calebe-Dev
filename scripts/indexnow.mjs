// Avisa os buscadores compatíveis com IndexNow (Bing, Yandex, Seznam, Naver, Yep) sobre páginas
// novas ou alteradas. O Google não usa IndexNow (para ele valem o sitemap e o Search Console).
//
// Uso:
//   npm run indexnow                          → todas as URLs do sitemap publicado
//   npm run indexnow -- /guest-post /         → só as páginas indicadas
//   node scripts/indexnow.mjs --desde <commit> → páginas alteradas desde o commit (GitHub Actions)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'calebearaujo.com.br';
const SITE = `https://${HOST}`;
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// a chave é o nome do arquivo de 32 caracteres hexadecimais em static/ (o conteúdo é a própria chave)
const arquivoChave = fs.readdirSync(path.join(ROOT, 'static')).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!arquivoChave) throw new Error('Chave do IndexNow não encontrada em static/');
const key = arquivoChave.replace('.txt', '');
const keyLocation = `${SITE}/${arquivoChave}`;

const todasDoSitemap = async () => {
	const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

// Converte os arquivos alterados desde um commit em URLs do site
const alteradasDesde = async (commit) => {
	let arquivos;
	try {
		arquivos = execFileSync('git', ['diff', '--name-only', commit, 'HEAD'], { cwd: ROOT, encoding: 'utf8' })
			.split('\n')
			.filter(Boolean);
	} catch {
		console.log(`Commit ${commit} indisponível: enviando todas as páginas.`);
		return todasDoSitemap();
	}
	const urls = new Set();
	for (const f of arquivos) {
		const pagina = f.match(/^src\/routes\/(?:(.+)\/)?\+page\.svelte$/);
		if (pagina) {
			urls.add(pagina[1] ? `${SITE}/${pagina[1]}` : `${SITE}/`);
			continue;
		}
		// imagens, vídeos e a própria chave não mudam o conteúdo das páginas
		if (/^static\/(images|videos)\//.test(f) || f === `static/${arquivoChave}`) continue;
		// código compartilhado (layout, componentes, dados, estilo, head): todas as páginas
		if (f.startsWith('src/') || f.startsWith('static/')) return todasDoSitemap();
	}
	return [...urls];
};

const args = process.argv.slice(2);
const urls =
	args[0] === '--desde'
		? await alteradasDesde(args[1])
		: args.length
			? args.map((p) => (p.startsWith('http') ? p : `${SITE}${p}`))
			: await todasDoSitemap();

if (!urls.length) {
	console.log('Nenhuma página alterada: nada a enviar.');
	process.exit(0);
}

// a chave precisa estar publicada para os buscadores validarem o envio
const publicada = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ''));
if (publicada.trim() !== key) throw new Error(`Chave ainda não publicada em ${keyLocation}`);

const resposta = await fetch('https://api.indexnow.org/indexnow', {
	method: 'POST',
	headers: { 'content-type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host: HOST, key, keyLocation, urlList: urls })
});
const significado = {
	200: 'OK: URLs recebidas',
	202: 'Aceito: a chave ainda está sendo validada',
	400: 'Requisição inválida',
	403: 'Chave inválida ou não encontrada',
	422: 'URLs não pertencem ao domínio ou chave não confere',
	429: 'Muitas requisições: tente mais tarde'
};
console.log(`IndexNow ${resposta.status}: ${significado[resposta.status] ?? resposta.statusText} (${urls.length} URLs)`);
urls.forEach((u) => console.log(`  ${u}`));
if (resposta.status >= 400) process.exit(1);
