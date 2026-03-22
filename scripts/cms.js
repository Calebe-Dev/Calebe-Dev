import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Utility for formatting dates
const getFormattedDate = () => {
	const now = new Date();
	return now.toISOString().split('T')[0];
};

// Simple slugify function
const slugify = (text) => {
	return text
		.toString()
		.normalize('NFD')                   
		.replace(/[\u0300-\u036f]/g, '')    
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')               
		.replace(/[^\w-]+/g, '')            
		.replace(/--+/g, '-');              
};

// Retrieve arguments
const args = process.argv.slice(2);
const command = args[0];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS_DIR = path.join(__dirname, '..', 'src', 'lib', 'data', 'posts');

// Ensure posts directory exists
if (!fs.existsSync(POSTS_DIR)) {
	fs.mkdirSync(POSTS_DIR, { recursive: true });
}

if (command === 'new') {
	const title = args.slice(1).join(' ');

	if (!title) {
		console.error('\n❌ Erro: Forneça um título para o post.');
		console.log('Uso: npm run post:new "Meu Novo Artigo Fantástico"\n');
		process.exit(1);
	}

	const slug = slugify(title);
	const date = getFormattedDate();
	const filename = `${slug}.md`;
	const filepath = path.join(POSTS_DIR, filename);

	if (fs.existsSync(filepath)) {
		console.error(`\n❌ Erro: O arquivo ${filename} já existe!\n`);
		process.exit(1);
	}

	const boilerplate = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
excerpt: "Escreva aqui um breve resumo de duas a três linhas para aparecer nos cards e indexadores do Google."
coverImage: "/blog/images/${slug}.jpg"
readTime: "5 min"
tags: ["Desenvolvimento", "Web"]
---

# ${title}

Introdução cativante sobre o assunto vai aqui. O arquivo markdown deve explorar ao máximo a hierarquia de subtítulos (\`##\`, \`###\`) para um bom SEO.

## O Desafio

Explique o problema que estamos tentando resolver.

## A Solução (Abordagem Técnica)

\`\`\`javascript
// Exemplo de código
function resolverProblema() {
    return "Solução premium";
}
\`\`\`

## Conclusão

Fechamento do artigo reforçando sua autoridade técnica.
`;

	try {
		fs.writeFileSync(filepath, boilerplate);
		console.log(`\n✅ Post Criado com Sucesso!`);
		console.log(`📝 Caminho: src/lib/data/posts/${filename}`);
		console.log(`🚀 Agora basta abrir o arquivo e iniciar sua escrita ou pedir para a IA completá-lo!\n`);
	} catch (error) {
		console.error(`\n❌ Erro ao criar o post: ${error.message}\n`);
	}

} else if (command === 'list') {
	try {
		const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
		if (files.length === 0) {
			console.log(`\n📭 Nenhum post encontrado em ${POSTS_DIR}\n`);
		} else {
			console.log(`\n📚 Total de ${files.length} Posts Locais:\n`);
			files.forEach(f => console.log(` - ${f}`));
			console.log('');
		}
	} catch (error) {
		console.error(`\n❌ Erro ao listar: ${error.message}\n`);
	}
} else {
	console.log('\nComandos Disponíveis:');
	console.log('  npm run post:new "Seu Titulo Aqui"  - Cria um novo boilerplate');
	console.log('  npm run post:list                   - Lista todos os markdowns do blog\n');
}
