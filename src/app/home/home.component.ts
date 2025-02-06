import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { SkilsComponent } from "../skils/skils.component";
import { ServicesComponent } from "../services/services.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutMeComponent, SocialLinksComponent, SkilsComponent, ServicesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
