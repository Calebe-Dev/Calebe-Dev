import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface ProjectStep {
  question: string;
  options?: string[];
  type: 'text' | 'select' | 'radio' | 'textarea' | 'budget';
  placeholder?: string;
}

@Component({
  selector: 'app-project-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-request-form.component.html',
  styleUrl: './project-request-form.component.scss',
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
      question: 'Qual é o tipo de projeto que você precisa?',
      type: 'select',
      options: [
        'Website Institucional',
        'E-commerce',
        'Landing Page',
        'Sistema Web Personalizado',
        'Campanha de Marketing Digital',
        'Outro'
      ]
    },
    {
      question: 'Qual é o prazo desejado para o projeto?',
      type: 'radio',
      options: [
        'Urgente (até 15 dias)',
        'Curto prazo (1-2 meses)',
        'Médio prazo (2-4 meses)',
        'Flexível'
      ]
    },
    {
      question: 'Descreva brevemente seu projeto e objetivos',
      type: 'textarea',
      placeholder: 'Conte-me mais sobre sua ideia...'
    },
    {
      question: 'Qual é seu orçamento estimado?',
      type: 'budget',
      options: [
        'Até R$ 5.000',
        'R$ 5.000 - R$ 10.000',
        'R$ 10.000 - R$ 20.000',
        'Acima de R$ 20.000',
        'A definir'
      ]
    }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1 && this.answers[this.currentStep]) {
      this.currentStep++;
    }
  }

  canProceed(): boolean {
    return !!this.answers[this.currentStep];
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submitForm() {
    console.log('Respostas:', this.answers);
    // Implementar lógica de envio
  }
}
