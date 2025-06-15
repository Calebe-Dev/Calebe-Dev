import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lensPosition: number = 0;
  lensWidth: number = 0;
  mobileMenuOpen: boolean = false;

  sections = ['about', 'services', 'projects', 'experience', 'solicitar-projeto'];

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  moveLens(event: MouseEvent, section: string) {
    const target = event.target as HTMLElement;
    const navbarContent = document.querySelector('.navbar-content');
    const targetRect = target.getBoundingClientRect();
    const navbarRect = navbarContent?.getBoundingClientRect();

    if (navbarRect) {
      this.lensPosition = targetRect.left - navbarRect.left;
      this.lensWidth = targetRect.width;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + 100;
    const navbarContent = document.querySelector('.navbar-content');

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          const link = navbarContent?.querySelector(`a[href="#${section}"]`) as HTMLElement;
          if (link) {
            const linkRect = link.getBoundingClientRect();
            const navbarRect = navbarContent?.getBoundingClientRect();

            if (navbarRect) {
              this.lensPosition = linkRect.left - navbarRect.left;
              this.lensWidth = linkRect.width;
            }
          }
          break;
        }
      }
    }
  }
}