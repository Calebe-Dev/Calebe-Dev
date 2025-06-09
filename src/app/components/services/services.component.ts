import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceGroup {
  name: string;
  aosDelay?: string;
  services: Service[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceGroups: ServiceGroup[] = [
    {
      name: 'Desenvolvimento Web',
      services: [
        { icon: 'fas fa-laptop-code', title: 'Sites Profissionais', description: 'Websites responsivos e otimizados para performance e SEO' },
        { icon: 'fas fa-palette', title: 'Design de Interfaces', description: 'Experiências visuais intuitivas e envolventes' },
        { icon: 'fas fa-search', title: 'Otimização SEO', description: 'Melhore sua visibilidade nos motores de busca' },
        { icon: 'fas fa-basket-shopping', title: 'Lojas Virtuais', description: 'E-commerce completo e integrado para seu negócio' },
        { icon: 'fas fa-bolt', title: 'Landing Pages', description: 'Páginas otimizadas para alta conversão' }
      ]
    },
    {
      name: 'Marketing Digital',
      aosDelay: '100',
      services: [
        { icon: 'fas fa-bullhorn', title: 'Gestão de Tráfego', description: 'Campanhas otimizadas para Meta Ads com foco em conversão' },
        { icon: 'fas fa-chart-line', title: 'Performance Digital', description: 'Estratégias data-driven para maximizar seu ROI' },
        { icon: 'fas fa-rocket', title: 'Lançamentos', description: 'Estratégias para lançamentos digitais de sucesso' }
      ]
    }
  ];
}
