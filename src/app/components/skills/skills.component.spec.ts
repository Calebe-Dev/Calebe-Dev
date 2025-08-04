import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importe o CommonModule

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true, // Adicione 'standalone: true'
  imports: [CommonModule] // 2. Adicione o CommonModule ao array de imports
})
export class SkillsComponent {
  skillCategories = [
    {
      name: "Desenvolvimento Web",
      skills: [
        { icon: "devicon-html5-plain", title: "HTML5", description: "Estruturação semântica e acessível para melhor SEO" },
        { icon: "devicon-css3-plain", title: "CSS3", description: "Layouts responsivos com Flexbox, Grid e SASS" },
        { icon: "devicon-javascript-plain", title: "JavaScript", description: "ES6+, APIs modernas e desenvolvimento interativo" },
        { icon: "devicon-angular-plain", title: "Angular", description: "Aplicações escaláveis com TypeScript e RxJS" },
        { icon: "devicon-react-plain", title: "React", description: "Interfaces dinâmicas com Hooks e Context API" }
      ]
    },
    // ... restante do seu array de skills
    {
      name: "Back-end & Dados",
      aosDelay: "300",
      skills: [
        { icon: "devicon-python-plain", title: "Python", description: "Django, Flask e automação de processos" },
        { icon: "devicon-java-plain", title: "Java", description: "Spring Boot e desenvolvimento robusto" },
        { icon: "devicon-mysql-plain", title: "SQL", description: "Modelagem e gestão de dados relacionais" }
      ]
    }
  ];
}