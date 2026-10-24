<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { guides, services, type WhatsApp } from '$lib/site';

	const path = guides.seoParaIa.path;
	const title = 'SEO para IA: como aparecer no ChatGPT e no AI Overviews - Calebe Araujo';
	const description =
		'SEO para IA (GEO): o que faz ChatGPT, Gemini e AI Overviews citarem um site, com HTML acessível, respostas diretas, dados próprios e autoria.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero que o meu site apareça nas respostas de IA. Meu site é: ',
		label: 'Avaliar o meu site para IA pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'SEO para IA', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Como fazer minha empresa aparecer no ChatGPT?',
			answer:
				'O ChatGPT cita sites que encontra pela busca, então o primeiro passo é estar bem indexado, inclusive no Bing, e não bloquear os robôs de busca da OpenAI. Depois, o site precisa ter páginas que respondam de forma direta às perguntas do seu cliente, com dados próprios, preços ou prazos reais e autoria clara.'
		},
		{
			question: 'SEO para IA substitui o SEO tradicional?',
			answer:
				'Não. Segundo o próprio Google, otimizar para os recursos de IA da busca continua sendo SEO: a página precisa estar indexada e elegível para aparecer com trecho, sem requisitos técnicos extras. O que muda é a ênfase em respostas diretas e em conteúdo que uma IA não conseguiria gerar sozinha.'
		},
		{
			question: 'Dá para medir quantas visitas vêm de ferramentas de IA?',
			answer:
				'Em parte. No Google Analytics, as visitas com origem em chatgpt.com, perplexity.ai ou gemini.google.com aparecem como referência. Mas muitos aplicativos não enviam a origem, e parte desse tráfego aparece como acesso direto, então o número real tende a ser maior que o medido.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'SEO para IA: como aparecer no ChatGPT e no AI Overviews' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>SEO para IA: como aparecer no ChatGPT e no AI Overviews</h1>

		<p>
			SEO para IA, também chamado de GEO (otimização para motores generativos), é o trabalho de fazer
			um site ser citado como fonte nas respostas de ferramentas como ChatGPT, Gemini, Perplexity e AI
			Overviews do Google. Na prática, é SEO bem feito com uma ênfase diferente: páginas acessíveis aos
			robôs, respostas diretas e informação que só a sua empresa tem.
		</p>
		<p>
			É uma frente da minha <a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a>, e este
			próprio site foi construído seguindo as recomendações abaixo.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="como-titulo">
		<h2 id="como-titulo">Como os motores de resposta escolhem o que citar</h2>
		<p>
			As ferramentas de IA com busca não leem a internet inteira a cada pergunta: elas consultam um
			índice de busca, selecionam trechos de páginas e montam a resposta a partir deles. O Google
			explica que, para aparecer nos recursos de IA da busca, a página precisa estar indexada e
			elegível para ser exibida com trecho, sem requisitos técnicos adicionais. O ChatGPT, por sua
			vez, usa parceiros de busca, entre eles o Bing, para encontrar as páginas que cita.
		</p>
		<p>
			Como a IA seleciona trechos e não páginas inteiras, cada seção precisa se sustentar sozinha:
			uma pergunta clara no título e a resposta direta logo no início do texto.
		</p>
	</section>

	<section aria-labelledby="fazer-titulo">
		<h2 id="fazer-titulo">O que fazer no site para ser citado por IA</h2>
		<ol>
			<li><strong>Conteúdo no HTML:</strong> a maioria dos robôs de IA não executa JavaScript. Se o texto só aparece depois que o JavaScript roda, para eles a página está vazia.</li>
			<li><strong>Robôs liberados:</strong> confira o robots.txt e também o firewall do provedor. A Cloudflare, por exemplo, passou a bloquear robôs de IA por padrão em novos domínios, o que pode impedir a citação sem você perceber.</li>
			<li><strong>Respostas diretas:</strong> comece cada seção respondendo à pergunta em duas ou três frases, com o sujeito explícito, e aprofunde depois.</li>
			<li><strong>Dados próprios:</strong> preços praticados, prazos medidos, resultados de clientes. Conteúdo que qualquer IA geraria não precisa ser citado.</li>
			<li><strong>Autoria e entidade:</strong> quem escreve, com que experiência, e os mesmos perfis ligados em todo lugar, para a IA saber quem é a fonte.</li>
			<li><strong>Bing indexado:</strong> cadastre o site no Bing Webmaster Tools, já que parte das ferramentas de IA depende desse índice.</li>
			<li><strong>Dados estruturados:</strong> Schema.org ajuda a descrever a página, mas não é requisito para os recursos de IA; trate como reforço, não como atalho.</li>
		</ol>
	</section>

	<section aria-labelledby="nao-titulo">
		<h2 id="nao-titulo">O que não funciona</h2>
		<ul>
			<li><strong>Arquivo llms.txt como solução:</strong> o Google já declarou que a busca não o utiliza, e nenhum grande motor de resposta confirmou depender dele. É barato de ter, mas não garante nada.</li>
			<li><strong>Repetir palavras-chave:</strong> a IA seleciona trechos que respondem bem, não trechos com mais repetições.</li>
			<li><strong>Páginas geradas em massa:</strong> texto genérico produzido em escala é exatamente o que o Google classifica como spam e o que a IA não tem motivo para citar.</li>
		</ul>
	</section>

	<section aria-labelledby="exemplo-titulo">
		<h2 id="exemplo-titulo">Este site como exemplo</h2>
		<p>
			Este site foi construído para ser lido por robôs de busca e de IA: todas as páginas são HTML
			gerado no servidor, sem JavaScript no navegador; o mesmo conteúdo é entregue para o Googlebot e
			para os robôs da OpenAI, da Anthropic e da Perplexity; cada página começa com uma resposta
			direta; os dados estruturados descrevem a pessoa, os serviços e as perguntas frequentes; e os
			perfis profissionais estão ligados com <code>rel="me"</code> e no schema, para identificar a
			mesma pessoa em todos eles.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO para IA" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: guides.siteNaoAparece.path, text: 'Diagnóstico de site que não aparece no Google' },
			{ href: guides.seoAngular.path, text: 'Renderização e SEO em aplicações Angular' },
			{ href: services.seoB2b.path, text: 'SEO para empresas B2B' }
		]}
	/>

	<Contact {whatsapp} title="Quer ver o seu site nas respostas de IA?" intro="Envie o endereço do site pelo WhatsApp e eu verifico se os robôs de IA conseguem ler e citar as suas páginas." />
</main>
