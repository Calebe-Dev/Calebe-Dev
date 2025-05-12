import { Component } from '@angular/core';
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
export class ProjectRequestFormComponent {
  currentStep = 0;
  answers: { [key: string]: any } = {};

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

  submitForm() {
    const serviceID = 'SEU_SERVICE_ID';
    const templateID = 'SEU_TEMPLATE_ID';
    const userID = 'SEU_USER_ID_OU_PUBLIC_KEY';

    // Monta o objeto templateParams dinamicamente com base nas perguntas
    const templateParams: { [key: string]: any } = {};
    this.steps.forEach(step => {
      step.questions.forEach(q => {
        templateParams[q.question] = this.answers[q.question] || '';
      });
    });

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert('Solicitação enviada com sucesso!');
      }, () => {
        alert('Erro ao enviar solicitação. Tente novamente.');
      });
  }
}
