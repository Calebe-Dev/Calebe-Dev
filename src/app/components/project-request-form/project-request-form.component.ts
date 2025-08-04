import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-project-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-request-form.component.html',
  styleUrls: ['./project-request-form.component.scss'],
  // A animação de slide não foi encontrada nos arquivos, mas pode ser adicionada aqui
})
export class ProjectRequestFormComponent implements OnInit, OnDestroy {
  // SUAS CHAVES DO EMAILJS - EXTRAÍDAS DO CÓDIGO
  readonly PUBLIC_KEY = "Kl3Hq-tAZU0MAUMhk";
  readonly SERVICE_ID = "service_biyvf9m";
  readonly TEMPLATE_ID = "template_i73szcp";

  currentStep = 0;
  answers: { [key: string]: any } = {};
  showSuccess = false;
  showError = false;
  private messageTimeout: any = null;

  steps = [
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
        { question: "Possui alguma referência visual ou site que gostaria de seguir como inspiração?", type: "textarea", placeholder: "Descreva ou cole links de referênciar" },
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

  ngOnInit(): void {
    try {
      emailjs.init(this.PUBLIC_KEY);
      console.log("EmailJS initialized successfully");
    } catch (e) {
      console.error("Failed to initialize EmailJS:", e);
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  canProceed(): boolean {
    return this.steps[this.currentStep].questions.every(q => q.optional || !!this.answers[q.question]);
  }

  async submitForm(): Promise<void> {
    try {
      if (!this.validateForm()) {
        console.error("Form validation failed");
        this.showErrorMessage();
        return;
      }
      
      const allAnswers = Object.entries(this.answers).map(([key, value]) => `${key}: ${value}`).join('\n');
      const currentYear = new Date().getFullYear();

      const templateParams = {
        to_name: "Calebe Dev",
        from_name: this.answers["Qual é seu nome completo?"] || "",
        from_email: this.answers["Qual seu e-mail de contato?"] || "",
        reply_to: this.answers["Qual seu e-mail de contato?"] || "",
        message: allAnswers,
        current_year: currentYear
      };

      console.log("Sending email with params:", templateParams);
      const response = await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        this.showSuccessMessage();
        this.resetForm();
      } else {
        throw new Error(`Email send failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Email send error:", error);
      this.showErrorMessage();
    }
  }
  
  private validateForm(): boolean {
    const requiredFields = ["Qual é seu nome completo?", "Qual seu e-mail de contato?", "Como prefere ser contatado?"];
    return requiredFields.every(field => this.answers[field] && typeof this.answers[field] === 'string' && this.answers[field].trim() !== '');
  }

  private resetForm(): void {
    this.answers = {};
    this.currentStep = 0;
  }
  
  private showSuccessMessage(): void {
    this.showSuccess = true;
    this.showError = false;
    if (this.messageTimeout) clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => { this.showSuccess = false; }, 5000);
  }

  private showErrorMessage(): void {
    this.showError = true;
    this.showSuccess = false;
    if (this.messageTimeout) clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => { this.showError = false; }, 5000);
  }

  ngOnDestroy(): void {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}