// Gera o card de compartilhamento (Open Graph / Twitter, 1200×630 JPG) de cada página a partir do
// build: título = H1 da página, foto = a mesma do hero. Uso: npm run build && npm run cards
// Requer Google Chrome e ffmpeg instalados (renderização local, sem serviço externo).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BUILD = path.join(ROOT, '.svelte-kit/cloudflare');
const OUT = path.join(ROOT, 'static/images/compartilhamento');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'cards-'));
fs.mkdirSync(OUT, { recursive: true });

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// rótulo do card por tipo de página
const rotulo = (slug) => {
	if (slug === 'home') return 'Sorocaba (SP) · atendimento em todo o Brasil';
	if (slug === 'desenvolvedor-full-stack-sorocaba' || slug === 'copywriter-seo') return 'Para recrutadores';
	if (slug === 'mapa-do-site') return 'Mapa do site';
	if (slug === 'politica-de-privacidade') return 'Institucional';
	if (slug === 'sorocaba-e-regiao') return 'Atendimento regional · raio de 90 km';
	if (/^(criacao-de-sites|consultoria-seo)-/.test(slug)) return 'Sorocaba e região';
	if (slug === 'site-gratis-para-empresas' || slug.startsWith('site-para-')) return 'Site grátis';
	if (['site-nao-aparece-no-google', 'seo-para-ia', 'seo-para-sites-angular', 'como-aparecer-no-google', 'seo-para-pequenas-empresas', 'migracao-de-site-sem-perder-seo'].includes(slug)) return 'Guia';
	return 'Serviço';
};

const paginas = fs.readdirSync(BUILD).filter((f) => f.endsWith('.html') && f !== '404.html');
for (const f of paginas) {
	const html = fs.readFileSync(path.join(BUILD, f), 'utf8');
	const slug = f === 'index.html' ? 'home' : f.replace(/\.html$/, '');
	const h1 = dec((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1].replace(/<[^>]+>/g, '').trim());
	const foto = (html.match(/\/images\/fotos\/([a-z0-9-]+)-768\.webp/) || [])[1];
	const tamanho = h1.length > 52 ? 54 : h1.length > 36 ? 62 : 70;
	const card = `<!doctype html><html><head><meta charset="utf-8"><style>
		html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#050f24;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}
		.foto{position:absolute;top:0;right:0;width:66%;height:100%;object-fit:cover;
			-webkit-mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.35) 30%,#000 70%)}
		.luz{position:absolute;inset:0;background:
			radial-gradient(620px 420px at 8% 0%,rgba(37,99,235,.42),transparent 70%),
			radial-gradient(520px 380px at 100% 100%,rgba(220,38,38,.32),transparent 70%)}
		.pontos{position:absolute;inset:0;background-image:radial-gradient(rgba(219,230,255,.12) 1px,transparent 1.4px);background-size:26px 26px;
			-webkit-mask-image:linear-gradient(to right,#000,transparent 60%)}
		.conteudo{position:absolute;left:72px;top:64px;bottom:64px;width:660px;display:flex;flex-direction:column}
		.marca{display:flex;align-items:center;gap:16px;color:#fff;font-weight:800;font-size:30px;letter-spacing:-.02em}
		.marca img{width:62px;height:62px;border-radius:50%;box-shadow:0 0 0 3px rgba(255,255,255,.85),0 10px 24px -8px rgba(59,130,246,.9)}
		.marca small{display:block;color:#dbe6ff;font-weight:600;font-size:17px;letter-spacing:0;margin-top:2px}
		.rotulo{margin-top:auto;align-self:flex-start;padding:7px 16px;border-radius:999px;font-size:18px;font-weight:700;color:#fff;
			background:linear-gradient(135deg,rgba(29,78,216,.85),rgba(185,28,28,.85));box-shadow:0 8px 20px -10px rgba(220,38,38,.9)}
		h1{margin:18px 0 0;color:#fff;font-size:${tamanho}px;line-height:1.04;letter-spacing:-.035em;font-weight:800;text-shadow:0 2px 24px rgba(5,15,36,.7)}
		.rodape{margin-top:26px;display:flex;align-items:center;gap:14px;color:#dbe6ff;font-size:22px;font-weight:600}
		.rodape b{color:#fff}
		.barra{position:absolute;left:0;right:0;bottom:0;height:10px;background:linear-gradient(90deg,#1d4ed8,#dc2626,#1d4ed8)}
	</style></head><body>
		${foto ? `<img class="foto" src="file://${ROOT}/static/images/fotos/${foto}-1376.webp">` : ''}
		<div class="luz"></div><div class="pontos"></div>
		<div class="conteudo">
			<div class="marca"><img src="file://${ROOT}/static/images/logo-marca.svg"><div>Calebe Araujo<small>Tech lead · Desenvolvedor full stack · SEO técnico</small></div></div>
			<div class="rotulo">${esc(rotulo(slug))}</div>
			<h1>${esc(h1)}</h1>
			<div class="rodape"><b>calebearaujo.com.br</b> · WhatsApp (11) 98838-5247</div>
		</div>
		<div class="barra"></div>
	</body></html>`;
	const htmlFile = path.join(TMP, `${slug}.html`);
	const png = path.join(TMP, `${slug}.png`);
	fs.writeFileSync(htmlFile, card);
	execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--allow-file-access-from-files',
		'--window-size=1200,630', `--user-data-dir=${path.join(TMP, 'perfil')}`, `--screenshot=${png}`, `file://${htmlFile}`], { stdio: 'ignore' });
	execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', png, '-q:v', '3', path.join(OUT, `${slug}.jpg`)]);
	console.log(`${slug}.jpg  ${Math.round(fs.statSync(path.join(OUT, `${slug}.jpg`)).size / 1024)} KB  "${h1}"`);
}
