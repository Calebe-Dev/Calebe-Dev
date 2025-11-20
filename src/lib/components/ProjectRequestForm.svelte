<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import emailjs from '@emailjs/browser';

  // EmailJS credentials
  const PUBLIC_KEY = "Kl3Hq-tAZU0MAUMhk";
  const SERVICE_ID = "service_biyvf9m";
  const TEMPLATE_ID = "template_i73szcp";

  let currentStep = 0;
  let answers: { [key: string]: any } = {};
  let showSuccess = false;
  let showError = false;
  let isSubmitting = false;
  let messageTimeout: ReturnType<typeof setTimeout> | null = null;

  interface Question {
    question: string;
    type: 'text' | 'radio' | 'textarea';
    placeholder?: string;
    options?: string[];
    optional?: boolean;
  }

  interface Step {
    title: string;
    questions: Question[];
  }

  const steps: Step[] = [
    {
      title: "Informações de Contato",
      questions: [
        { question: "Qual é seu nome completo?", type: "text", placeholder: "Digite seu nome completo" },
        { question: "Qual seu e-mail de contato?", type: "text", placeholder: "Digite seu e-mail" },
        { question: "Deseja adicionar um número de WhatsApp para facilitar a comunicação?", type: "text", placeholder: "Digite seu número de WhatsApp (opcional)", optional: true },
        { question: "Como prefere ser contatado?", type: "radio", options: ["E-mail", "WhatsApp", "Outro"] },
        { question: "Qual o prazo ideal para entrega do projeto?", type: "text", placeholder: "Digite o prazo desejado" },
        { question: "Qual o orçamento disponível para este projeto?", type: "text", placeholder: "Digite o orçamento disponível" },
        { question: "O orçamento é flexível mediante escopo e complexidade?", type: "radio", options: ["Sim", "Não"] }
      ]
    },
    {
      title: "Detalhes do Projeto",
      questions: [
        { question: "Qual o tipo do projeto?", type: "text", placeholder: "Ex: site institucional, portfólio, etc." },
        { question: "O projeto será feito do zero ou com base em um template existente?", type: "radio", options: ["Do zero", "Baseado em template"] },
        { question: "Possui alguma referência visual ou site que gostaria de seguir como inspiração?", type: "textarea", placeholder: "Descreva ou cole links de referência" },
        { question: "Já possui um domínio ou hospedagem?", type: "textarea", placeholder: "Forneça os dados ou diga se precisa de ajuda" },
        { question: "Quais seções ou páginas você deseja no projeto?", type: "textarea", placeholder: "Ex: Sobre, Serviços, Contato, Portfólio..." },
        { question: "Qual é o principal objetivo do projeto?", type: "textarea", placeholder: "Ex: atrair clientes, apresentar serviços, etc." },
        { question: "Quem é o público-alvo do seu site ou solução?", type: "textarea", placeholder: "Descreva o público-alvo" }
      ]
    },
    {
      title: "Preferências Visuais e Funcionalidades",
      questions: [
        { question: "Você já possui textos prontos para o site?", type: "radio", options: ["Sim", "Não"] },
        { question: "Você já possui imagens ou deseja que eu utilize imagens ilustrativas?", type: "radio", options: ["Já possuo imagens", "Utilizar imagens ilustrativas"] },
        { question: "Já possui uma identidade visual (logo, cores, tipografia)?", type: "radio", options: ["Sim", "Não"] },
        { question: "Deseja que eu siga alguma paleta de cores específica?", type: "textarea", placeholder: "Descreva ou cole links de referência" },
        { question: "Tem preferência por estilo visual?", type: "radio", options: ["Moderno", "Clássico", "Minimalista", "Colorido", "Outro"] },
        { question: "Deseja incluir alguma funcionalidade específica?", type: "textarea", placeholder: "Ex: formulário, área de blog, etc." },
        { question: "Deseja que eu cuide de manutenção ou atualizações futuras?", type: "radio", options: ["Sim", "Não"] },
        { question: "Algum outro detalhe ou comentário que gostaria de adicionar?", type: "textarea", placeholder: "Adicione mais informações, se necessário", optional: true }
      ]
    }
  ];

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }

  function canProceed(): boolean {
    return steps[currentStep].questions.every(q => q.optional || !!answers[q.question]);
  }

  function validateForm(): boolean {
    const requiredFields = ["Qual é seu nome completo?", "Qual seu e-mail de contato?", "Como prefere ser contatado?"];
    return requiredFields.every(field => answers[field] && typeof answers[field] === 'string' && answers[field].trim() !== '');
  }

  function resetForm() {
    answers = {};
    currentStep = 0;
  }

  function showSuccessMessage() {
    showSuccess = true;
    showError = false;
    if (messageTimeout) clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => { showSuccess = false; }, 5000);
  }

  function showErrorMessage() {
    showError = true;
    showSuccess = false;
    if (messageTimeout) clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => { showError = false; }, 5000);
  }

  async function submitForm() {
    if (!browser) return;
    
    try {
      if (!validateForm()) {
        console.error("Form validation failed");
        showErrorMessage();
        return;
      }
      
      isSubmitting = true;
      
      const allAnswers = Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join('\n');
      const currentYear = new Date().getFullYear();

      const templateParams = {
        to_name: "Calebe Dev",
        from_name: answers["Qual é seu nome completo?"] || "",
        from_email: answers["Qual seu e-mail de contato?"] || "",
        reply_to: answers["Qual seu e-mail de contato?"] || "",
        message: allAnswers,
        current_year: currentYear
      };

      console.log("Sending email with params:", templateParams);
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      if (response.status === 200) {
        showSuccessMessage();
        resetForm();
      } else {
        throw new Error(`Email send failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Email send error:", error);
      showErrorMessage();
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() => {
    if (browser) {
      try {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS initialized successfully");
      } catch (e) {
        console.error("Failed to initialize EmailJS:", e);
      }
    }
  });

  onDestroy(() => {
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
  });
</script>

<section class="project-form-section">
  <div class="form-container">
    <div class="progress-bar">
      <div class="progress" style="width: {((currentStep + 1) / steps.length) * 100}%"></div>
      <div class="steps">
        {#each steps as step, i}
          <div 
            class="step" 
            class:active={i === currentStep}
            class:completed={i < currentStep}
          >
            {i + 1}
          </div>
        {/each}
      </div>
    </div>

    <div class="form-content">
      <h2>{steps[currentStep].title}</h2>

      {#each steps[currentStep].questions as question, i}
        <div class="input-container">
          {#if question.type === 'radio' && question.options}
            <span class="question-label">{question.question}</span>
            <div class="radio-options-group">
              {#each question.options as option}
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name={question.question}
                    value={option}
                    bind:group={answers[question.question]}
                  >
                  <span class="radio-label">{option}</span>
                </label>
              {/each}
            </div>
          {:else if question.type === 'text'}
            <label class="question-label" for="question-{currentStep}-{i}">{question.question}</label>
            <input
              id="question-{currentStep}-{i}"
              bind:value={answers[question.question]}
              placeholder={question.placeholder || ''}
              type="text"
            >
          {:else if question.type === 'textarea'}
            <label class="question-label" for="question-{currentStep}-{i}">{question.question}</label>
            <textarea
              id="question-{currentStep}-{i}"
              bind:value={answers[question.question]}
              placeholder={question.placeholder || 'Descreva aqui...'}
              rows="4"
            ></textarea>
          {/if}
        </div>
      {/each}

      <div class="form-actions">
        {#if currentStep > 0}
          <button class="btn-secondary" on:click={previousStep}>Voltar</button>
        {/if}
        {#if currentStep < steps.length - 1}
          <button class="btn-primary" on:click={nextStep} disabled={!canProceed()}>Continuar</button>
        {:else}
          <button class="btn-submit" on:click={submitForm} disabled={!canProceed() || isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        {/if}
      </div>

      {#if showSuccess}
        <div class="message success">
          Formulário enviado com sucesso! Entraremos em contato em breve.
        </div>
      {/if}
      {#if showError}
        <div class="message error">
          Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
.project-form-section {
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.progress-bar {
  position: relative;
  margin-bottom: 3rem;
}

.progress {
  height: 4px;
  background: linear-gradient(135deg, #007aff, #00c6ff);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.step {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.step.active {
  background: linear-gradient(135deg, #007aff, #00c6ff);
  color: white;
  transform: scale(1.1);
}

.step.completed {
  background: #00c6ff;
  color: white;
}

.form-content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: 600;
}

.input-container {
  margin-bottom: 2rem;
}

.question-label {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.8);
}

input[type="text"],
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: #007aff;
  background: rgba(255, 255, 255, 0.8);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.radio-options-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.radio-option:hover {
  background: rgba(255, 255, 255, 0.5);
}

.radio-option input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.radio-label {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary,
.btn-submit {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary,
.btn-submit {
  background: linear-gradient(135deg, #007aff, #00c6ff);
  color: white;
}

.btn-primary:hover:not(:disabled),
.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 122, 255, 0.3);
}

.btn-primary:disabled,
.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.3);
  color: #000;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.5);
}

.message {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  animation: slideIn 0.3s ease;
}

.message.success {
  background: rgba(0, 255, 0, 0.1);
  color: #008000;
  border: 1px solid rgba(0, 255, 0, 0.3);
}

.message.error {
  background: rgba(255, 0, 0, 0.1);
  color: #d00;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .project-form-section {
    padding: 4rem 1rem;
  }
  
  .form-container {
    padding: 2rem;
  }
  
  .form-content h2 {
    font-size: 1.5rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary,
  .btn-submit {
    width: 100%;
  }
}
</style>
