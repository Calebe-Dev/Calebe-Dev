import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import emailjs from 'emailjs-com';

interface ProjectStep {
  title: string;
  questions: {
    question: string;
    type: 'text' | 'select' | 'radio' | 'textarea' | 'checkbox';
    options?: string[];
    placeholder?: string;
    optional?: boolean;
  }[];
}

interface EmailJSError {
  status?: number;
  text?: string;
  response?: {
    status: number;
    text: string;
  };
}

@Component({
  selector: 'app-project-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-request-form.component.html',
  styleUrls: ['./project-request-form.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectRequestFormComponent implements OnInit, OnDestroy {
  private readonly PUBLIC_KEY = 'Kl3Hq-tAZU0MAUMhk';
  private readonly SERVICE_ID = 'service_biyvf9m';
  private readonly TEMPLATE_ID = 'template_aqx1doi';

  currentStep = 0;
  answers: { [key: string]: any } = {};

  // Add these properties to track message states
  showSuccess = false;
  showError = false;
  messageTimeout: any = null;

  steps: ProjectStep[] = [
    {
      title: 'Informações de Contato',
      questions: [
        { question: 'Qual é seu nome completo?', type: 'text', placeholder: 'Digite seu nome completo' },
        { question: 'Qual seu e-mail de contato?', type: 'text', placeholder: 'Digite seu e-mail' },
        { question: 'Deseja adicionar um número de WhatsApp para facilitar a comunicação?', type: 'text', placeholder: 'Digite seu número de WhatsApp (opcional)', optional: true },
        { question: 'Como prefere ser contatado?', type: 'radio', options: ['E-mail', 'WhatsApp', 'Outro'] }
      ]
    },
    {
      title: 'Detalhes do Projeto',
      questions: [
        { question: 'Qual o tipo do projeto?', type: 'text', placeholder: 'Ex: site institucional, portfólio, etc.' },
        { question: 'O projeto será feito do zero ou com base em um template existente?', type: 'radio', options: ['Do zero', 'Baseado em template'] },
        { question: 'Possui alguma referência visual ou site que gostaria de seguir como inspiração?', type: 'textarea', placeholder: 'Descreva ou cole links de referência' },
        { question: 'Já possui um domínio ou hospedagem?', type: 'textarea', placeholder: 'Forneça os dados ou diga se precisa de ajuda' },
        { question: 'Quais seções ou páginas você deseja no projeto?', type: 'textarea', placeholder: 'Ex: Sobre, Serviços, Contato, Portfólio...' }
      ]
    },
    {
      title: 'Preferências Visuais',
      questions: [
        { question: 'Você já possui textos prontos para o site?', type: 'radio', options: ['Sim', 'Não'] },
        { question: 'Você já possui imagens ou deseja que eu utilize imagens ilustrativas?', type: 'radio', options: ['Já possuo imagens', 'Utilizar imagens ilustrativas'] },
        { question: 'Já possui uma identidade visual (logo, cores, tipografia)?', type: 'radio', options: ['Sim', 'Não'] },
        { question: 'Deseja que eu siga alguma paleta de cores específica?', type: 'textarea', placeholder: 'Descreva ou cole links de referência' },
        { question: 'Tem preferência por estilo visual?', type: 'radio', options: ['Moderno', 'Clássico', 'Minimalista', 'Colorido', 'Outro'] }
      ]
    },
    {
      title: 'Objetivos e Orçamento',
      questions: [
        { question: 'Qual é o principal objetivo do projeto?', type: 'textarea', placeholder: 'Ex: atrair clientes, apresentar serviços, etc.' },
        { question: 'Quem é o público-alvo do seu site ou solução?', type: 'textarea', placeholder: 'Descreva o público-alvo' },
        { question: 'Qual o prazo ideal para entrega do projeto?', type: 'text', placeholder: 'Digite o prazo desejado' },
        { question: 'Qual o orçamento disponível para este projeto?', type: 'text', placeholder: 'Digite o orçamento disponível' },
        { question: 'O orçamento é flexível mediante escopo e complexidade?', type: 'radio', options: ['Sim', 'Não'] }
      ]
    },
    {
      title: 'Funcionalidades e Manutenção',
      questions: [
        { question: 'Deseja incluir alguma funcionalidade específica?', type: 'textarea', placeholder: 'Ex: formulário, área de blog, etc.' },
        { question: 'Deseja que eu cuide de manutenção ou atualizações futuras?', type: 'radio', options: ['Sim', 'Não'] },
        { question: 'Algum outro detalhe ou comentário que gostaria de adicionar?', type: 'textarea', placeholder: 'Adicione mais informações, se necessário' }
      ]
    }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  canProceed(): boolean {
    const currentQuestions = this.steps[this.currentStep].questions;
    return currentQuestions.every(q => q.optional || !!this.answers[q.question]);
  }

  ngOnInit() {
    try {
      emailjs.init(this.PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }

  async submitForm() {
    try {
      if (!this.validateForm()) {
        console.error('Form validation failed');
        this.showErrorMessage();
        return;
      }

      // Consolidar todas as respostas em um único campo
      const formattedAnswers = Object.entries(this.answers)
        .map(([question, answer]) => `${question}: ${answer}`)
        .join('\n');

      // Obter o ano atual para o template
      const currentYear = new Date().getFullYear();

      // Criar o objeto templateParams com todas as variáveis necessárias
      const templateParams = {
        to_name: 'Calebe Dev',
        from_name: this.answers['Qual é seu nome completo?'],
        from_email: this.answers['Qual seu e-mail de contato?'],
        contact_preference: this.answers['Como prefere ser contatado?'],
        whatsapp: this.answers['Deseja adicionar um número de WhatsApp para facilitar a comunicação?'] || 'Não informado',
        project_type: this.answers['Qual o tipo do projeto?'] || 'Não informado',
        references: this.answers['Possui alguma referência visual ou site que gostaria de seguir como inspiração?'] || 'Não informado',
        project_goal: this.answers['Qual é o principal objetivo do projeto?'] || 'Não informado',
        features: this.answers['Deseja incluir alguma funcionalidade específica?'] || 'Não informado',
        budget: this.answers['Qual o orçamento disponível para este projeto?'] || 'Não informado',
        deadline: this.answers['Qual o prazo ideal para entrega do projeto?'] || 'Não informado',
        project_details: formattedAnswers, // Resumo de todas as respostas
        reply_to: this.answers['Qual seu e-mail de contato?'],
        current_year: currentYear, // Adicionando o ano atual para o template
        message: formattedAnswers // Campo alternativo caso o template use 'message' em vez de 'project_details'
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      if (response.status === 200) {
        this.showSuccessMessage();
        this.resetForm();
      } else {
        throw new Error(`Email send failed with status: ${response.status}`);
      }

    } catch (error: unknown) {
      console.error('Email send error:', error);
      this.showErrorMessage();
    }
  }

  private resetForm(): void {
    this.answers = {};
    this.currentStep = 0;
  }

  private validateForm(): boolean {
    const requiredFields = [
      'Qual é seu nome completo?',
      'Qual seu e-mail de contato?',
      'Como prefere ser contatado?'
    ];

    return requiredFields.every(field => 
      this.answers[field] && 
      typeof this.answers[field] === 'string' && 
      this.answers[field].trim() !== ''
    );
  }

  private showSuccessMessage(): void {
    this.showSuccess = true;
    this.showError = false;
    
    // Clear any existing timeout
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    
    // Hide message after 5 seconds
    this.messageTimeout = setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }

  private showErrorMessage(): void {
    this.showError = true;
    this.showSuccess = false;
    
    // Clear any existing timeout
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    
    // Hide message after 5 seconds
    this.messageTimeout = setTimeout(() => {
      this.showError = false;
    }, 5000);
  }

  ngOnDestroy(): void {
    // Clean up timeout when component is destroyed
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}
