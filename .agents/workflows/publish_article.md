---
description: Pipeline automatizada para escrita, geração estrutural e publicação de novos artigos técnicos no site utilizando o script CLI local CMS.
---

# Fluxo de Manutenção Editorial do SvelteKit (CMS Offline Workflow)

Sempre que o usuário determinar a requisição "escreva um artigo sobre [X]", "crie um post de blog sobre [Y]", ou se ele simplesmente usar um atalho como `/publish-article`, você (a Inteligência Artificial) deverá automaticamente orquestrar a execução via código utilizando as etapas exatas desta *Skill*. Não crie os arquivos na mão; invoque os motores locais.

## Step 1: Estruturação Local (Boilerplate Engine)
1. Analise o tema solicitado pelo usuário. Crie mentalmente um título matador e orientado a retenção B2B / Autoridade Técnica.
2. Utilize o comando *run_command* do terminal para executar a ferramenta de build:
   `npm run post:new "Nome do Seu Título Extremo que Pensa no SEO"`
3. A saída no terminal te retornará o Caminho (`src/lib/data/posts/nome-slug.md`). Prossiga.

## Step 2: Escrita Estratégica
1. Use a ferramenta *multi_replace_file_content* (ou `replace_file_content` block inteiro) no `.md` recém-criado.
2. **Setup do Frontmatter**:
   - `excerpt`: Escreva rigorosamente um texto persuasivo de 1 a 2 linhas e meia.
   - `tags`: ["Dev", "Tech Lead"], liste palavras relacionadas ao código.
   - `readTime`: Estime conscientemente (ex: "5 min").
3. **Draft Técnico (O Artigo)**:
   - Adicione linguagem autoritativa, de programador sênior para líder executivo ou desenvolvedores. Sem termos genéricos de "Olá pessoal". 
   - Quebre em seções de UI atraentes do Github-Flavor (`##`, `###`, e *Listas*).
   - Incorpore um bloco de ` ```ts ` ou ` ```css ` ou código que embeleze o blog, dando suporte ao argumento.

## Step 3: Deployment e Sync
1. Verifique as *Builds* do frontend rodando na pasta global (`npm run check`) de forma limpa.
2. Mande uma notificação pro usuário atestando o fim do Workflow e indique que o novo blogpost encontra-se funcional localmente em `http://localhost:5173/blog/o-seu-slug-aqui` para a visualização dele. Se estiver tudo OK, ele poderá dar o `git push` onde a nossa esteira (GitHub Actions `deploy.yml`) tomará de conta na nuvem.
