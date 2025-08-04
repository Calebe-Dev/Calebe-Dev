import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lensPosition = 0;
  lensWidth = 0;
  mobileMenuOpen = false;
  sections = ["about", "services", "projects", "experience", "solicitar-projeto"];

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const navbarContent = document.querySelector('.navbar-content');
    if (navbarContent && target.matches('a')) {
      const navRect = navbarContent.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (window.innerWidth > 768) {
        this.lensPosition = targetRect.left - navRect.left;
        this.lensWidth = targetRect.width;
      }
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy
    const navbarContent = document.querySelector(".navbar-content");

    for (const sectionId of this.sections) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const activeLink = navbarContent?.querySelector(`a[href="#${sectionId}"], a[routerLink="/${sectionId}"]`);

          if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = navbarContent?.getBoundingClientRect();
            if (navRect && window.innerWidth > 768) {
              this.lensPosition = linkRect.left - navRect.left;
              this.lensWidth = linkRect.width;
            }
          }
          break; // Found the active section, no need to check others
        }
      }
    }
  }
}