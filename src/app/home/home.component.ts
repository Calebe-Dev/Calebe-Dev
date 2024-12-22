import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
