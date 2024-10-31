import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SocialCardsComponent } from './social-cards/social-cards.component';

import { ScrollAnimationDirective } from './scroll-animation.directive';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SocialCardsComponent,
    ScrollAnimationDirective,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
