import { Component } from '@angular/core';
import { HeroComponent } from "../components/hero/hero.component";
import { AboutComponent } from "../components/about/about.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { ServicesComponent } from "../components/services/services.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { CallToActionComponent } from "../components/call-to-action/call-to-action.component";
import { ContactComponent } from "../components/contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, ServicesComponent, ExperienceComponent, ProjectsComponent, TestimonialsComponent, CallToActionComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
