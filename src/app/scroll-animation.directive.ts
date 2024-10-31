// src/app/scroll-animation.directive.ts
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 } // 30% do elemento precisa estar visível para acionar a animação
    );

    observer.observe(this.el.nativeElement);
  }
}
