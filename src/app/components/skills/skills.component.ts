import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  icon: string;
  title: string;
  description: string;
}

interface SkillCategory {
  name: string;
  aosDelay?: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Desenvolvimento Web',
      skills: [
        { icon: 'devicon-html5-plain', title: 'HTML5', description: 'Estruturação semântica e acessível para melhor SEO' },
        { icon: 'devicon-css3-plain', title: 'CSS3', description: 'Layouts responsivos com Flexbox, Grid e SASS' },
        { icon: 'devicon-javascript-plain', title: 'JavaScript', description: 'ES6+, APIs modernas e desenvolvimento interativo' },
        { icon: 'devicon-angular-plain', title: 'Angular', description: 'Aplicações escaláveis com TypeScript e RxJS' },
        { icon: 'devicon-react-plain', title: 'React', description: 'Interfaces dinâmicas com Hooks e Context API' }
      ]
    },
    {
      name: 'Marketing Digital',
      aosDelay: '100',
      skills: [
        { icon: 'fas fa-chart-line', title: 'Meta Ads', description: 'Gestão de campanhas e otimização de conversão' },
        { icon: 'fas fa-bullseye', title: 'Tráfego Pago', description: 'Estratégias de aquisição e remarketing' },
        { icon: 'fas fa-chart-bar', title: 'Analytics', description: 'Análise de dados e otimização de campanhas' }
      ]
    },
    {
      name: 'Tecnologias Emergentes',
      aosDelay: '200',
      skills: [
        { icon: 'fas fa-robot', title: 'IA Generativa', description: 'Integração de LLMs e ferramentas de IA' },
        { icon: 'fas fa-camera', title: 'Fotografia', description: 'Produção visual para marketing digital' },
        { icon: 'fas fa-mobile-alt', title: 'Mobile Dev', description: 'Flutter e Kotlin para apps multiplataforma' }
      ]
    },
    {
      name: 'Back-end & Dados',
      aosDelay: '300',
      skills: [
        { icon: 'devicon-python-plain', title: 'Python', description: 'Django, Flask e automação de processos' },
        { icon: 'devicon-java-plain', title: 'Java', description: 'Spring Boot e desenvolvimento robusto' },
        { icon: 'devicon-mysql-plain', title: 'SQL', description: 'Modelagem e gestão de dados relacionais' }
      ]
    }
  ];
}
