import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { SkilsComponent } from "../skils/skils.component";
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, HeroComponent, AboutMeComponent, SocialLinksComponent, SkilsComponent, ServicesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
