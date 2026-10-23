import { execFileSync } from 'child_process';
import { unstable_readConfig } from 'wrangler';

// Rollback do Cloudflare Pages: volta a produção para o deploy anterior.
//   npm run rollback              -> deploy de produção anterior ao atual
//   npm run rollback -- <id>      -> deploy específico (ids em `wrangler pages deployment list`)
//
// Autenticação: CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID ou a sessão do `wrangler login`.

// Mesmo .env que o wrangler lê (não sobrescreve variáveis já definidas)
try {
	process.loadEnvFile();
} catch {}

const API = 'https://api.cloudflare.com/client/v4';
const targetId = process.argv[2];

const wrangler = (...args) =>
	execFileSync('npx', ['wrangler', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

const fail = (message) => {
	console.error(`❌ ${message}`);
	process.exit(1);
};

const getToken = () => {
	if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN;
	try {
		return JSON.parse(wrangler('auth', 'token', '--json')).token;
	} catch {
		fail('Sem credenciais. Rode `npx wrangler login` ou defina CLOUDFLARE_API_TOKEN.');
	}
};

const getAccountId = () => {
	if (process.env.CLOUDFLARE_ACCOUNT_ID) return process.env.CLOUDFLARE_ACCOUNT_ID;
	let accounts;
	try {
		({ accounts } = JSON.parse(wrangler('whoami', '--json')));
	} catch {}
	if (accounts?.length !== 1) {
		fail('Não foi possível escolher a conta automaticamente. Defina CLOUDFLARE_ACCOUNT_ID.');
	}
	return accounts[0].id;
};

const projectName = unstable_readConfig({}).name;
const token = getToken();
const projectUrl = `${API}/accounts/${getAccountId()}/pages/projects/${projectName}`;

const api = async (path, method = 'GET') => {
	const res = await fetch(`${projectUrl}${path}`, {
		method,
		headers: { Authorization: `Bearer ${token}` }
	});
	const body = await res.json();
	if (!body.success) {
		fail(`API da Cloudflare (${method} ${path}): ${body.errors?.map((e) => e.message).join(', ')}`);
	}
	return body.result;
};

console.log(`⏪ Iniciando rollback do projeto "${projectName}"...`);

let deploymentId = targetId;

if (!deploymentId) {
	const project = await api('');
	const current = project.canonical_deployment;
	if (!current) fail('O projeto ainda não tem deploy de produção.');
	const deployments = await api('/deployments?env=production&per_page=25');

	// Deploys de produção bem-sucedidos, criados antes do que está no ar
	const previous = deployments
		.filter((d) => d.latest_stage?.status === 'success' && d.created_on < current.created_on)
		.sort((a, b) => b.created_on.localeCompare(a.created_on))[0];

	if (!previous) fail('Nenhum deploy de produção anterior encontrado.');

	console.log(`💾 Atual:    ${current.id} (${current.created_on})`);
	console.log(`🔄 Anterior: ${previous.id} (${previous.created_on})`);
	deploymentId = previous.id;
}

const result = await api(`/deployments/${deploymentId}/rollback`, 'POST');

console.log('');
console.log('✅ Rollback realizado com sucesso!');
console.log(`🌐 Produção agora aponta para: ${result.url}`);
console.log('');
