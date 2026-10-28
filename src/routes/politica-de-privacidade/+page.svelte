<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph } from '$lib/schema';
	import { person, privacyPage, socials, type WhatsApp } from '$lib/site';

	const path = privacyPage.path;
	const title = 'Política de privacidade - Calebe Araujo';
	const description =
		'Como o site calebearaujo.com.br trata dados pessoais: sem formulários nem cookies próprios, contato pelo WhatsApp ou e-mail e seus direitos pela LGPD.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Tenho uma dúvida sobre a política de privacidade do seu site.',
		label: 'Tirar dúvida no WhatsApp'
	};
	const crumbs = [{ name: 'Política de privacidade', path }];

	// Data em que esta versão da política passou a valer (mudou o texto, muda a data)
	const VIGENCIA = '2026-10-28';
	const vigenciaLabel = new Date(`${VIGENCIA}T12:00:00`).toLocaleDateString('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const jsonLd = pageGraph({ path, title, description, crumbs });
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia />
		<Breadcrumbs {crumbs} />

		<h1>Política de privacidade</h1>

		<p>
			Este site não tem formulários, não pede cadastro e não usa cookies próprios nem pixels de anúncio.
			Esta página explica, em linguagem direta, quais dados pessoais chegam até mim, para quê, com quem
			são compartilhados e como você exerce seus direitos pela Lei Geral de Proteção de Dados (LGPD, Lei
			nº 13.709/2018).
		</p>

		<p>Versão vigente desde <time datetime={VIGENCIA}>{vigenciaLabel}</time>.</p>
	</header>

	<section aria-labelledby="controlador-titulo">
		<h2 id="controlador-titulo">Quem é o responsável pelos dados</h2>
		<p>
			O responsável (controlador) pelos dados tratados neste site e nos contatos feitos por ele sou eu:
			<strong>{person.fullName}</strong>, com sede em {person.city} – {person.region}, Brasil. Como agente
			de tratamento de pequeno porte, não
			tenho um encarregado (DPO) separado: atendo pessoalmente qualquer pedido sobre dados pessoais pelo
			e-mail <a href={`mailto:${person.email}`}>{person.email}</a>.
		</p>
	</section>

	<section aria-labelledby="coleta-titulo">
		<h2 id="coleta-titulo">Quais dados são tratados e para quê</h2>
		<table>
			<caption>Dados tratados, finalidade e base legal na LGPD</caption>
			<thead>
				<tr>
					<th scope="col">Situação</th>
					<th scope="col">Dados</th>
					<th scope="col">Finalidade</th>
					<th scope="col">Base legal</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Navegar pelo site</th>
					<td>Endereço IP, data e hora, página acessada, navegador e sistema operacional</td>
					<td>Entregar as páginas e proteger o site contra ataques e abusos</td>
					<td>Legítimo interesse (art. 7º, IX)</td>
				</tr>
				<tr>
					<th scope="row">Estatísticas de visita</th>
					<td>Página vista, site de origem, país, tipo de navegador e dispositivo e tempo de carregamento, sem identificar o visitante</td>
					<td>Saber quais páginas são úteis e se o site está rápido</td>
					<td>Legítimo interesse (art. 7º, IX)</td>
				</tr>
				<tr>
					<th scope="row">Falar comigo pelo WhatsApp ou por e-mail</th>
					<td>Nome, telefone, e-mail, empresa e o que você escrever na mensagem</td>
					<td>Responder, entender o projeto e preparar uma proposta</td>
					<td>Procedimentos preliminares de contrato, a seu pedido (art. 7º, V), ou legítimo interesse em responder ao contato (art. 7º, IX)</td>
				</tr>
				<tr>
					<th scope="row">Contratar um serviço</th>
					<td>Dados de contato e de cobrança (nome ou razão social, CPF ou CNPJ, endereço)</td>
					<td>Executar o serviço, emitir nota fiscal e cumprir obrigações fiscais</td>
					<td>Execução de contrato (art. 7º, V) e cumprimento de obrigação legal (art. 7º, II)</td>
				</tr>
			</tbody>
		</table>
		<p>
			Não uso esses dados para criar perfis de comportamento, não os vendo e não envio mensagens de
			marketing sem você pedir.
		</p>
	</section>

	<section aria-labelledby="whatsapp-titulo">
		<h2 id="whatsapp-titulo">Contato pelo WhatsApp</h2>
		<p>
			Os botões de WhatsApp do site abrem uma conversa com o número {person.phoneDisplay} e já trazem uma
			mensagem pronta que indica de qual página do site você veio (por exemplo, a página de auditoria de
			SEO). Isso me ajuda a entender o assunto antes de responder. Nada é enviado sem a sua ação: você pode
			editar ou apagar a mensagem antes de mandar. A conversa passa pelo WhatsApp, da Meta, e segue também
			a política de privacidade do aplicativo.
		</p>
	</section>

	<section aria-labelledby="cookies-titulo">
		<h2 id="cookies-titulo">Cookies e estatísticas de visita</h2>
		<p>
			O site é feito só de páginas HTML prontas, sem JavaScript próprio, e não grava cookies próprios. Não
			uso Google Analytics, Google Tag Manager, Meta Pixel nem outro rastreador de anúncios.
		</p>
		<p>
			As estatísticas de visita vêm do Cloudflare Web Analytics, que funciona sem cookies, sem gravar nada
			no seu navegador e sem identificar visitantes individualmente: eu só vejo números agregados, como
			quantas visitas cada página recebeu. Em situações de proteção contra robôs e ataques, a Cloudflare
			pode gravar cookies estritamente necessários de segurança (como <code>__cf_bm</code> ou
			<code>cf_clearance</code>), que não servem para publicidade.
		</p>
	</section>

	<section aria-labelledby="compartilhamento-titulo">
		<h2 id="compartilhamento-titulo">Com quem os dados são compartilhados</h2>
		<p>Os dados só passam pelos serviços necessários para o site e o contato funcionarem:</p>
		<ul>
			<li>
				<strong>Cloudflare</strong>: hospedagem, entrega das páginas, proteção contra ataques e estatísticas
				de visita.
			</li>
			<li><strong>Meta (WhatsApp)</strong>: quando você conversa comigo pelo WhatsApp.</li>
			<li><strong>Google (Gmail)</strong>: quando você me escreve por e-mail.</li>
			<li>
				<strong>Emissão de nota fiscal</strong>: dados de cobrança de quem contrata um serviço vão para o
				sistema de nota fiscal e, quando houver, para a contabilidade.
			</li>
			<li>
				<strong>Autoridades públicas</strong>: somente quando houver obrigação legal ou ordem judicial.
			</li>
		</ul>
		<p>
			Esses provedores têm servidores fora do Brasil. A transferência internacional de dados acontece
			dentro do que a LGPD permite (art. 33), com as garantias contratuais que esses provedores oferecem.
		</p>
	</section>

	<section aria-labelledby="terceiros-titulo">
		<h2 id="terceiros-titulo">Links para outros sites</h2>
		<p>
			O site tem links para redes sociais ({socials.map((s) => s.name).join(', ')}) e botões para
			compartilhar a página em redes como WhatsApp, LinkedIn, Facebook, X, Threads, Bluesky, Telegram,
			Reddit e Pinterest. São links comuns: nada dessas redes é carregado no site, e elas só recebem dados
			quando você clica. A partir daí, vale a política de privacidade de cada uma.
		</p>
	</section>

	<section aria-labelledby="retencao-titulo">
		<h2 id="retencao-titulo">Por quanto tempo os dados ficam guardados</h2>
		<ul>
			<li>
				<strong>Registros técnicos de acesso</strong>: pelo prazo curto definido pela Cloudflare para
				operar e proteger o site.
			</li>
			<li>
				<strong>Conversas que não viraram projeto</strong>: até 12 meses depois do último contato, para
				retomar o assunto se você voltar. Depois, são apagadas.
			</li>
			<li>
				<strong>Clientes</strong>: durante o serviço e por 5 anos depois do fim, prazo das obrigações
				fiscais e para a defesa em eventuais processos (art. 7º, VI).
			</li>
		</ul>
		<p>Você pode pedir a exclusão antes desses prazos, exceto do que a lei me obriga a guardar.</p>
	</section>

	<section aria-labelledby="direitos-titulo">
		<h2 id="direitos-titulo">Seus direitos pela LGPD</h2>
		<p>Pelo artigo 18 da LGPD, você pode pedir, a qualquer momento e sem custo:</p>
		<ul>
			<li>confirmação de que trato dados seus e acesso a eles;</li>
			<li>correção de dados incompletos, inexatos ou desatualizados;</li>
			<li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
			<li>portabilidade dos dados para outro fornecedor;</li>
			<li>informação sobre com quem os dados foram compartilhados;</li>
			<li>eliminação dos dados e revogação do consentimento, quando o tratamento depender dele;</li>
			<li>oposição a um tratamento feito com base no legítimo interesse.</li>
		</ul>
		<p>
			Para exercer qualquer um deles, escreva para <a href={`mailto:${person.email}`}>{person.email}</a>.
			Respondo em até 15 dias. Se achar que seu pedido não foi atendido, você também pode reclamar à
			<a href="https://www.gov.br/anpd/">Autoridade Nacional de Proteção de Dados (ANPD)</a>.
		</p>
	</section>

	<section aria-labelledby="seguranca-titulo">
		<h2 id="seguranca-titulo">Segurança</h2>
		<p>
			O site funciona só em HTTPS, com cabeçalhos de segurança que bloqueiam scripts de terceiros e não
			guarda dados de visitantes em banco de dados próprio. Conversas e documentos de projetos ficam em
			contas de acesso restrito, usadas só por mim.
		</p>
	</section>

	<section aria-labelledby="menores-titulo">
		<h2 id="menores-titulo">Crianças e adolescentes</h2>
		<p>
			O site é voltado a empresas, profissionais e recrutadores, e não se destina a menores de 18 anos. Não
			trato intencionalmente dados de crianças e adolescentes.
		</p>
	</section>

	<section aria-labelledby="alteracoes-titulo">
		<h2 id="alteracoes-titulo">Alterações nesta política</h2>
		<p>
			Esta política pode mudar quando o site ou a forma de atendimento mudarem. A versão vigente fica
			sempre nesta página, com a data no topo.
		</p>
	</section>

	<Contact
		{whatsapp}
		title="Dúvidas sobre privacidade"
		intro="Para pedidos sobre seus dados, prefira o e-mail. Para dúvidas rápidas, o WhatsApp também serve."
	/>
</main>
