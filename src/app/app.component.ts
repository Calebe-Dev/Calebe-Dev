import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";
import { ProjectRequestFormComponent } from "./components/project-request-form/project-request-form.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ServicesComponent } from "./components/services/services.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [HeroComponent, TestimonialsComponent, CallToActionComponent, ProjectRequestFormComponent, ContactComponent, FooterComponent, NavbarComponent, AboutComponent, SkillsComponent, ServicesComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Calebe-Dev';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out'
      });
    }
  }

}