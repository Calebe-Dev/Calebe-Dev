import { x as attr_style, F as ensure_array_like, v as attr_class, w as attr, y as stringify, z as head } from "../../../chunks/index.js";
import { a as ssr_context, e as escape_html } from "../../../chunks/context.js";
import "@emailjs/browser";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function ProjectRequestForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentStep = 0;
    let answers = {};
    let isSubmitting = false;
    const steps = [
      {
        title: "Informações de Contato",
        questions: [
          {
            question: "Qual é seu nome completo?",
            type: "text",
            placeholder: "Digite seu nome completo"
          },
          {
            question: "Qual seu e-mail de contato?",
            type: "text",
            placeholder: "Digite seu e-mail"
          },
          {
            question: "Deseja adicionar um número de WhatsApp para facilitar a comunicação?",
            type: "text",
            placeholder: "Digite seu número de WhatsApp (opcional)",
            optional: true
          },
          {
            question: "Como prefere ser contatado?",
            type: "radio",
            options: ["E-mail", "WhatsApp", "Outro"]
          },
          {
            question: "Qual o prazo ideal para entrega do projeto?",
            type: "text",
            placeholder: "Digite o prazo desejado"
          },
          {
            question: "Qual o orçamento disponível para este projeto?",
            type: "text",
            placeholder: "Digite o orçamento disponível"
          },
          {
            question: "O orçamento é flexível mediante escopo e complexidade?",
            type: "radio",
            options: ["Sim", "Não"]
          }
        ]
      },
      {
        title: "Detalhes do Projeto",
        questions: [
          {
            question: "Qual o tipo do projeto?",
            type: "text",
            placeholder: "Ex: site institucional, portfólio, etc."
          },
          {
            question: "O projeto será feito do zero ou com base em um template existente?",
            type: "radio",
            options: ["Do zero", "Baseado em template"]
          },
          {
            question: "Possui alguma referência visual ou site que gostaria de seguir como inspiração?",
            type: "textarea",
            placeholder: "Descreva ou cole links de referência"
          },
          {
            question: "Já possui um domínio ou hospedagem?",
            type: "textarea",
            placeholder: "Forneça os dados ou diga se precisa de ajuda"
          },
          {
            question: "Quais seções ou páginas você deseja no projeto?",
            type: "textarea",
            placeholder: "Ex: Sobre, Serviços, Contato, Portfólio..."
          },
          {
            question: "Qual é o principal objetivo do projeto?",
            type: "textarea",
            placeholder: "Ex: atrair clientes, apresentar serviços, etc."
          },
          {
            question: "Quem é o público-alvo do seu site ou solução?",
            type: "textarea",
            placeholder: "Descreva o público-alvo"
          }
        ]
      },
      {
        title: "Preferências Visuais e Funcionalidades",
        questions: [
          {
            question: "Você já possui textos prontos para o site?",
            type: "radio",
            options: ["Sim", "Não"]
          },
          {
            question: "Você já possui imagens ou deseja que eu utilize imagens ilustrativas?",
            type: "radio",
            options: ["Já possuo imagens", "Utilizar imagens ilustrativas"]
          },
          {
            question: "Já possui uma identidade visual (logo, cores, tipografia)?",
            type: "radio",
            options: ["Sim", "Não"]
          },
          {
            question: "Deseja que eu siga alguma paleta de cores específica?",
            type: "textarea",
            placeholder: "Descreva ou cole links de referência"
          },
          {
            question: "Tem preferência por estilo visual?",
            type: "radio",
            options: ["Moderno", "Clássico", "Minimalista", "Colorido", "Outro"]
          },
          {
            question: "Deseja incluir alguma funcionalidade específica?",
            type: "textarea",
            placeholder: "Ex: formulário, área de blog, etc."
          },
          {
            question: "Deseja que eu cuide de manutenção ou atualizações futuras?",
            type: "radio",
            options: ["Sim", "Não"]
          },
          {
            question: "Algum outro detalhe ou comentário que gostaria de adicionar?",
            type: "textarea",
            placeholder: "Adicione mais informações, se necessário",
            optional: true
          }
        ]
      }
    ];
    function canProceed() {
      return steps[currentStep].questions.every((q) => q.optional || !!answers[q.question]);
    }
    onDestroy(() => {
    });
    $$renderer2.push(`<section class="project-form-section svelte-p4v37k"><div class="form-container svelte-p4v37k"><div class="progress-bar svelte-p4v37k"><div class="progress svelte-p4v37k"${attr_style(`width: ${stringify((currentStep + 1) / steps.length * 100)}%`)}></div> <div class="steps svelte-p4v37k"><!--[-->`);
    const each_array = ensure_array_like(steps);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<div${attr_class("step svelte-p4v37k", void 0, { "active": i === currentStep, "completed": i < currentStep })}>${escape_html(i + 1)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="form-content svelte-p4v37k"><h2 class="svelte-p4v37k">${escape_html(steps[currentStep].title)}</h2> <!--[-->`);
    const each_array_1 = ensure_array_like(steps[currentStep].questions);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let question = each_array_1[$$index_2];
      let i = $$index_2;
      $$renderer2.push(`<div class="input-container svelte-p4v37k">`);
      if (question.type === "radio" && question.options) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="question-label svelte-p4v37k">${escape_html(question.question)}</span> <div class="radio-options-group svelte-p4v37k"><!--[-->`);
        const each_array_2 = ensure_array_like(question.options);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let option = each_array_2[$$index_1];
          $$renderer2.push(`<label class="radio-option svelte-p4v37k"><input type="radio"${attr("name", question.question)}${attr("value", option)}${attr("checked", answers[question.question] === option, true)} class="svelte-p4v37k"/> <span class="radio-label svelte-p4v37k">${escape_html(option)}</span></label>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (question.type === "text") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<label class="question-label svelte-p4v37k"${attr("for", `question-${stringify(currentStep)}-${stringify(i)}`)}>${escape_html(question.question)}</label> <input${attr("id", `question-${stringify(currentStep)}-${stringify(i)}`)}${attr("value", answers[question.question])}${attr("placeholder", question.placeholder || "")} type="text" class="svelte-p4v37k"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (question.type === "textarea") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<label class="question-label svelte-p4v37k"${attr("for", `question-${stringify(currentStep)}-${stringify(i)}`)}>${escape_html(question.question)}</label> <textarea${attr("id", `question-${stringify(currentStep)}-${stringify(i)}`)}${attr("placeholder", question.placeholder || "Descreva aqui...")} rows="4" class="svelte-p4v37k">`);
            const $$body = escape_html(answers[question.question]);
            if ($$body) {
              $$renderer2.push(`${$$body}`);
            }
            $$renderer2.push(`</textarea>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="form-actions svelte-p4v37k">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (currentStep < steps.length - 1) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="btn-primary svelte-p4v37k"${attr("disabled", !canProceed(), true)}>Continuar</button>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button class="btn-submit svelte-p4v37k"${attr("disabled", !canProceed() || isSubmitting, true)}>${escape_html("Enviar")}</button>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function _page($$renderer) {
  head("hm1jax", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Solicitar Projeto - Calebe Araújo</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Solicite seu projeto web personalizado com Calebe Araújo"/>`);
  });
  ProjectRequestForm($$renderer);
}
export {
  _page as default
};
