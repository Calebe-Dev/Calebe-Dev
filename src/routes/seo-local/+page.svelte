<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { guides, services, type WhatsApp } from '$lib/site';

	const path = guides.seoLocal.path;
	const title = 'SEO local: o que é e como fazer sua empresa aparecer na cidade - Calebe Araujo';
	const description =
		'SEO local é o que faz uma empresa aparecer no mapa e nas buscas da própria cidade. Veja como funciona e o que fazer no Perfil da Empresa, no site e nas avaliações.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero melhorar o SEO local da minha empresa. Minha empresa e cidade são: ',
		label: 'Falar sobre SEO local pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'SEO local', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Qual a diferença entre SEO local e SEO tradicional?',
			answer:
				'O SEO tradicional disputa buscas sem ligação com um lugar, como "o que é CRM", e compete com sites do país inteiro. O SEO local disputa buscas com intenção de lugar, como "dentista em Sorocaba" ou "eletricista perto de mim", em que o Google mostra o mapa e dá peso à distância de quem pesquisa e ao Perfil da Empresa no Google.'
		},
		{
			question: 'Preciso de site para fazer SEO local?',
			answer:
				'Dá para aparecer no mapa só com o Perfil da Empresa, mas o site faz diferença: ele dá ao Google a informação de cada serviço, aparece nas buscas mais específicas e é onde o cliente decide. Um perfil ligado a um site com uma página por serviço costuma ganhar de um perfil sozinho.'
		},
		{
			question: 'Quanto tempo o SEO local leva para dar resultado?',
			answer:
				'Correções no perfil e no site aparecem em semanas. Subir para os três primeiros do mapa em uma cidade com concorrência costuma levar de três a seis meses de avaliações constantes, fotos novas e páginas de serviço, dependendo de quantos concorrentes já fazem o mesmo.'
		},
		{
			question: 'Criar uma página para cada cidade ajuda no SEO local?',
			answer:
				'Só quando a empresa atende de verdade aquela cidade e tem algo específico a dizer sobre ela. Páginas iguais trocando só o nome da cidade são tratadas pelo Google como páginas de entrada (doorway pages), uma forma de spam, e podem prejudicar o site inteiro.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'SEO local: o que é e como fazer sua empresa aparecer na cidade', type: 'Article' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="regiao" />
		<Breadcrumbs {crumbs} />

		<h1>SEO local: o que é e como fazer sua empresa aparecer na cidade</h1>

		<p>
			SEO local é o trabalho de fazer uma empresa aparecer quando alguém pesquisa no Google o que ela
			vende na região onde atende, como "conserto de celular em Sorocaba" ou "pet shop perto de mim".
			Nessas buscas, o Google mostra um mapa com três empresas, que vêm do Perfil da Empresa no Google, e
			depois os sites. O SEO local trabalha os dois.
		</p>
		<p>
			É o tipo de SEO que mais traz resultado para negócios de bairro e prestadores de serviço, porque
			quem pesquisa com a cidade ou com "perto de mim" já quer contratar.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="como-titulo">
		<h2 id="como-titulo">Como o Google escolhe as empresas da busca local</h2>
		<p>
			Segundo o próprio Google, os resultados locais dependem principalmente de três fatores:
		</p>
		<table>
			<caption>Os três fatores da busca local e o que você controla em cada um</caption>
			<thead>
				<tr>
					<th scope="col">Fator</th>
					<th scope="col">O que significa</th>
					<th scope="col">O que você controla</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Relevância</th>
					<td>O quanto a empresa corresponde ao que foi pesquisado</td>
					<td>Categoria do perfil, serviços cadastrados e páginas de serviço no site</td>
				</tr>
				<tr>
					<th scope="row">Distância</th>
					<td>O quanto a empresa está perto de quem pesquisa ou do lugar pesquisado</td>
					<td>Quase nada: depende do endereço ou da área de atendimento real</td>
				</tr>
				<tr>
					<th scope="row">Proeminência</th>
					<td>O quanto a empresa é conhecida, online e fora dela</td>
					<td>Avaliações, menções em outros sites, links e a qualidade do site</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="pilares-titulo">
		<h2 id="pilares-titulo">Os quatro pilares do SEO local</h2>
		<h3>1. Perfil da Empresa no Google completo e verificado</h3>
		<p>
			Categoria principal certa, serviços, área de atendimento, horários e fotos reais. O passo a passo
			está no guia do <a href={guides.perfilEmpresa.path}>Perfil da Empresa no Google</a>.
		</p>
		<h3>2. Site com uma página para cada serviço</h3>
		<p>
			Cada serviço importante ganha uma página própria, com o serviço e a cidade no título, no H1 e no
			texto. É ela que aparece para a busca específica e que o perfil pode usar como link. O site também
			precisa de dados estruturados de negócio local (LocalBusiness) com o mesmo nome, endereço e
			telefone do perfil.
		</p>
		<h3>3. Avaliações reais e frequentes</h3>
		<p>
			Avaliações pesam na proeminência e na decisão de quem pesquisa. O que funciona é pedir para todo
			cliente atendido e responder a todas; o que dá problema é comprar, trocar por desconto ou escrever
			avaliações próprias.
		</p>
		<h3>4. Consistência de nome, endereço e telefone (NAP)</h3>
		<p>
			NAP é a sigla em inglês para nome, endereço e telefone. Eles precisam ser idênticos no site, no
			perfil, nas redes sociais e em diretórios. Telefones diferentes em cada lugar fazem o Google duvidar
			de qual é o dado certo.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="cidades-titulo">
		<h2 id="cidades-titulo">Empresas que atendem várias cidades</h2>
		<p>
			O perfil aparece com mais força perto do endereço da empresa. Para disputar outras cidades, o
			caminho é o site: uma página para cada cidade onde há busca real e algo específico a dizer, como
			clientes atendidos, tempo de deslocamento ou condições próprias. É o modelo que uso neste site, com
			uma <a href="/sorocaba-e-regiao">página regional</a> e páginas só para as cidades com busca, como
			Sorocaba, Itu, Indaiatuba, Jundiaí e Campinas.
		</p>
		<p>
			O que não funciona são dezenas de páginas iguais trocando o nome da cidade: o Google trata isso
			como spam.
		</p>
	</section>

	<section aria-labelledby="medir-titulo">
		<h2 id="medir-titulo">Como medir o SEO local</h2>
		<ul>
			<li><strong>No Perfil da Empresa:</strong> o painel de desempenho mostra buscas, ligações, rotas e cliques no site.</li>
			<li><strong>No Search Console:</strong> as consultas com o nome da cidade e "perto de mim" mostram se as páginas de serviço estão aparecendo.</li>
			<li><strong>No site:</strong> formulários e WhatsApp registrando de qual página veio cada contato.</li>
		</ul>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência com SEO local</h2>
		<p>
			Trabalhei na rede de portais locais Indica, com sites para Sorocaba, Campinas, Osasco, Guarulhos e
			São Paulo, e mantenho sites de negócios locais como o da Esquadrias Martins, em Sorocaba, cujos
			cliques no Google cresceram mais de 60 vezes depois da migração. Os casos estão no
			<a href="/portfolio">portfólio</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO local" />

	<Related
		links={[
			{ href: guides.perfilEmpresa.path, text: 'Perfil da Empresa no Google: como criar e otimizar' },
			{ href: '/consultoria-seo-sorocaba', text: 'Consultoria de SEO local em Sorocaba' },
			{ href: guides.comoAparecer.path, text: 'Como colocar minha empresa no Google' },
			{ href: guides.pequenasEmpresas.path, text: 'SEO para pequenas empresas' },
			{ href: services.criacaoDeSites.path, text: 'Sites com uma página para cada serviço' }
		]}
	/>

	<Contact {whatsapp} title="Quer a sua empresa no mapa da sua cidade?" intro="Envie o nome da empresa, a cidade e os serviços principais; eu digo o que falta no perfil e no site." />
</main>
