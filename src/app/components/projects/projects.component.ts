import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      category: 'Angular & JSON Server',
      title: 'Lista de Músicas',
      description: 'Aplicação web para exibição de músicas com informações detalhadas, desenvolvida com Angular e Bootstrap, consumindo dados via JSON Server.',
      date: '11 Set 2023',
      context: 'ADS 3º Semestre - Programação Web',
      github: '#',
      aosDelay: ''
    },
    {
      category: 'Spring Boot',
      title: 'API Agenda de Compromissos',
      description: 'Back-end de uma agenda desenvolvida com Spring Boot, implementando REST APIs e boas práticas de desenvolvimento.',
      date: '12 Nov 2023',
      context: 'Projeto Final - Programação Web',
      github: '#',
      aosDelay: '100'
    },
    {
      category: 'HTML, CSS & JS',
      title: 'Portfólio Interativo',
      description: 'Projeto de demonstração criando uma experiência única e interativa para o usuário utilizando tecnologias web fundamentais.',
      date: '15 Fev 2023',
      context: '',
      github: '#',
      aosDelay: '200'
    },
    {
      category: 'Landing Page',
      title: 'Douglas Castro',
      description: 'Página de vendas otimizada para conversão, com design moderno e foco em experiência do usuário.',
      date: '15 Fev 2023',
      context: '',
      github: '#',
      aosDelay: '300'
    }
  ];
}
