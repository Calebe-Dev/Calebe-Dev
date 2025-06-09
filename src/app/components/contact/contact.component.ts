import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactCard {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  cssClass: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactCards: ContactCard[] = [
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      description: 'Vamos expandir nossa rede profissional',
      link: 'https://www.linkedin.com/in/calebe-dev',
      linkLabel: 'Conectar',
      cssClass: 'linkedin'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      description: 'Explore meus projetos e contribuições',
      link: 'https://github.com/Calebe-Dev',
      linkLabel: 'Ver Projetos',
      cssClass: 'github'
    },
    {
      icon: 'fab fa-instagram',
      title: 'Instagram',
      description: 'Acompanhe meu dia a dia profissional',
      link: 'https://www.instagram.com/calebe_original/',
      linkLabel: 'Seguir',
      cssClass: 'instagram'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      description: 'Vamos conversar sobre seu projeto',
      link: 'mailto:seu-email@dominio.com',
      linkLabel: 'Enviar mensagem',
      cssClass: 'email'
    }
  ];
}
