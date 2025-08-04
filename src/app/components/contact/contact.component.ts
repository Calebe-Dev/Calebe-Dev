import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactCards = [
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description: "Vamos expandir nossa rede profissional",
      link: "https://www.linkedin.com/in/calebe-dev",
      linkLabel: "Conectar",
      cssClass: "linkedin"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      description: "Explore meus projetos e contribuições",
      link: "https://github.com/Calebe-Dev",
      linkLabel: "Ver Projetos",
      cssClass: "github"
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      description: "Acompanhe meu dia a dia profissional",
      link: "https://www.instagram.com/calebe_original/",
      linkLabel: "Seguir",
      cssClass: "instagram"
    },
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      description: "Vamos conversar sobre seu projeto",
      link: "mailto:seu-email@dominio.com",
      linkLabel: "Enviar mensagem",
      cssClass: "email"
    }
  ];
}