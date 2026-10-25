// Grava no build o commit publicado (/versao.txt). O workflow do IndexNow consulta esse arquivo
// para só avisar os buscadores depois que a Cloudflare terminou de publicar o commit.
// No Workers Builds a Cloudflare define WORKERS_CI_COMMIT_SHA; localmente fica "local".
import fs from 'node:fs';

const versao = process.env.WORKERS_CI_COMMIT_SHA || 'local';
fs.writeFileSync(new URL('../.svelte-kit/cloudflare/versao.txt', import.meta.url), `${versao}\n`);
console.log(`versao.txt: ${versao}`);
