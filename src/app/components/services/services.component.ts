import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importe o CommonModule

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,                  // 2. Adicione 'standalone: true'
  imports: [CommonModule]            // 3. Adicione o CommonModule aos imports
})
export class ServicesComponent {
  serviceGroups = [
    {
      name: "Desenvolvimento Web",
      services: [
        { icon: "fas fa-laptop-code", title: "Sites Profissionais", description: "Websites responsivos e otimizados para performance e SEO" },
        { icon: "fas fa-palette", title: "Design de Interfaces", description: "Experiências visuais intuitivas e envolventes" },
        { icon: "fas fa-search", title: "Otimização SEO", description: "Melhore sua visibilidade nos motores de busca" },
        { icon: "fas fa-basket-shopping", title: "Lojas Virtuais", description: "E-commerce completo e integrado para seu negócio" },
        { icon: "fas fa-bolt", title: "Landing Pages", description: "Páginas otimizadas para alta conversão" }
      ]
    },
    {
      name: "Marketing Digital",
      aosDelay: "100",
      services: [
        { icon: "fas fa-bullhorn", title: "Gestão de Tráfego", description: "Campanhas otimizadas para Meta Ads com foco em conversão" },
        { icon: "fas fa-chart-line", title: "Performance Digital", description: "Estratégias data-driven para maximizar seu ROI" },
        { icon: "fas fa-rocket", title: "Lançamentos", description: "Estratégias para lançamentos digitais de sucesso" },
        { icon: "fas fa-envelope", title: "Email Marketing", description: "Automação e campanhas de email para engajamento e conversão" },
        { icon: "fas fa-comments", title: "Social Media", description: "Gestão de redes sociais para engajamento e crescimento" }
      ]
    }
  ];
}