<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';

  let lensPosition = 0;
  let lensWidth = 0;
  let mobileMenuOpen = false;
  let scrollY = 0;
  let isScrolled = false;
  let navbarContentEl: HTMLElement | null = null;
  let previousActiveElement: Element | null = null;
  let previousBodyOverflow = '';
  
  const sections = ["about", "services", "projects", "experience", "blog", "solicitar-projeto"];

  const SITE_DOMAIN = 'https://calebearaujo.com.br';

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) focusFirstMenuItem();
  }

  function closeMenu() {
    mobileMenuOpen = false;
    // restore focus to previous element
    if (previousActiveElement && (previousActiveElement as HTMLElement).focus) {
      (previousActiveElement as HTMLElement).focus();
    }
  }

  function focusFirstMenuItem() {
    if (browser && navbarContentEl) {
      previousActiveElement = document.activeElement;
      const firstLink = navbarContentEl.querySelector('a');
      if (firstLink && (firstLink as HTMLElement).focus) (firstLink as HTMLElement).focus();
    }
  }

  function handleLinkClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target || !target.closest) return;
    const link = target.closest('a') as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const navbarContent = navbarContentEl;

    // Update lens on desktop
    if (navbarContent && link) {
      const navRect = navbarContent.getBoundingClientRect();
      const targetRect = link.getBoundingClientRect();
      if (window.innerWidth > 768) {
        lensPosition = targetRect.left - navRect.left;
        lensWidth = targetRect.width;
      }
    }

    // Handle hash links specially so they work from other routes (e.g. /blog -> /#about)
    if (href.includes('#')) {
      event.preventDefault();
      const id = href.split('#').pop() || '';

      // If we're already on the homepage, just scroll to the element
      if (browser && window.location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMenu();
        return;
      }

      // Otherwise navigate to /#id and attempt to scroll after navigation
      goto('/#' + id).then(() => {
        if (!browser) return;
        // slight delay to wait for DOM update
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }).finally(() => closeMenu());

      return;
    }

    // For normal links, ensure mobile menu closes
    if (href && href !== '#') {
      // let default navigation happen, but close mobile menu
      setTimeout(() => closeMenu(), 50);
    }
  }

  function updateLensOnScroll() {
    if (!browser || window.innerWidth <= 768) return;
    
    const scrollPosition = window.scrollY + 100;
    const navbarContent = navbarContentEl;

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // match links like "#about" or "/#about"
          const activeLink = navbarContent?.querySelector(`a[href$="#${sectionId}"]`);

          if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = navbarContent?.getBoundingClientRect();
            if (navRect) {
              lensPosition = linkRect.left - navRect.left;
              lensWidth = linkRect.width;
            }
          }
          break;
        }
      }
    }
  }

  $: if (browser && scrollY !== undefined) {
    updateLensOnScroll();
    isScrolled = scrollY > 50;
  }

  // Manage body scroll when mobile menu is open
  $: if (browser) {
    if (mobileMenuOpen) {
      previousBodyOverflow = document.body.style.overflow || '';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousBodyOverflow || '';
    }
  }

  onMount(() => {
    if (!browser) return;

    // Initialize lens on first link (desktop)
    setTimeout(() => {
      const firstLink = navbarContentEl?.querySelector('a');
      if (firstLink && window.innerWidth > 768 && navbarContentEl) {
        const navRect = navbarContentEl.getBoundingClientRect();
        const linkRect = firstLink.getBoundingClientRect();
        lensPosition = linkRect.left - navRect.left;
        lensWidth = linkRect.width;
      }
    }, 100);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow || '';
    };
  });
</script>

<svelte:window bind:scrollY />

<header class="navbar" class:menu-open={mobileMenuOpen} class:scrolled={isScrolled}>
  <div class="navbar-container">
    <button
      aria-label="Menu"
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-menu"
      class="hamburger"
      on:click={toggleMenu}
    >
      <span class:open={mobileMenuOpen}></span>
      <span class:open={mobileMenuOpen}></span>
      <span class:open={mobileMenuOpen}></span>
    </button>
    <nav
      bind:this={navbarContentEl}
      id="mobile-menu"
      aria-hidden={!mobileMenuOpen}
      class="navbar-content"
      class:open={mobileMenuOpen}
    >
      <div class="lens" style="left: {lensPosition}px; width: {lensWidth}px;"></div>
        <button aria-label="Fechar" class="close-btn" on:click={closeMenu}>
          &times;
        </button>
      <!-- Reordered nav: Início, Sobre, Serviços, Projetos, Experiência, Blog, Solicitar, Whatsapp -->
      <a href="/" class="home-link" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Início</a>
      <a href="https://calebearaujo.com.br/#about" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Sobre</a>
      <a href="https://calebearaujo.com.br/#services" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Serviços</a>
      <a href="https://calebearaujo.com.br/#projects" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Projetos</a>
      <a href="https://calebearaujo.com.br/#experience" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Experiência</a>
      <a href="/blog" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Blog</a>
      <a class="btnSolicitarProjeto" href="/solicitar-projeto/redirect" on:click={(e) => { handleLinkClick(e); closeMenu(); }}>Solicitar Projeto</a>
      <a href="https://wa.me/5511988385247" target="_blank" rel="noopener" class="highlight" on:click={closeMenu}>Whatsapp</a>
    </nav>
  </div>
</header>

<style>
.navbar {
  position: fixed;
  top: var(--navbar-top, 12px);
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  max-width: 980px;
  z-index: 2100;
  height: var(--navbar-height, 56px);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}

  .navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    padding: 8px 20px;
    /* Match hero container glass background and blur so they appear unified */
    background: var(--glass-bg-strong, rgba(255,255,255,0.85));
    backdrop-filter: saturate(180%) var(--glass-blur, blur(30px));
    -webkit-backdrop-filter: saturate(180%) var(--glass-blur, blur(30px));
  border-radius: 50px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
    box-sizing: border-box;
}

.navbar-content a {
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
  transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 6px 12px;
  white-space: nowrap;
}

.navbar-content a:hover {
  color: #0071e3;
}

.btnSolicitarProjeto {
  padding: 6px 14px;
  border-radius: 14px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  font-size: 0.813rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.highlight {
  padding: 6px 14px;
  border-radius: 14px;
  background: #0071e3;
  color: #fff !important;
  font-weight: 600;
  font-size: 0.813rem;
  box-shadow: 0 2px 8px rgba(0, 113, 227, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.highlight:hover {
  background: #0077ed;
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.4);
  transform: translateY(-1px);
}

.lens {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: left 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  padding: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  z-index: 1001;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              background 0.3s ease;
}

.hamburger span.open {
  background: #0071e3;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar {
    width: auto;
    max-width: none;
    left: 20px;
    transform: none;
    padding: 0;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
  }
  
  .navbar.menu-open {
    width: calc(100% - 40px);
    left: 20px;
    transform: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.85);
  }
  
  .navbar-container {
    justify-content: center;
    width: auto;
    padding: 6px;
  }
  
  .hamburger {
    display: flex;
    margin: 0 auto;
  }
  
  .navbar-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(245, 245, 247, 0.95);
    backdrop-filter: saturate(180%) blur(40px);
    -webkit-backdrop-filter: saturate(180%) blur(40px);
    border-radius: 0;
    box-shadow: none;
    padding: 60px 0 0;
    z-index: 2000;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    gap: 8px;
  }
  
  .navbar-content.open {
    opacity: 1;
    pointer-events: all;
  }
  
  .navbar-content a {
    font-size: 1.15rem;
    padding: 14px 0;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }

  .close-btn {
    display: none;
    position: absolute;
    top: 18px;
    right: 18px;
    background: transparent;
    border: 0;
    font-size: 2rem;
    line-height: 1;
    padding: 6px 8px;
    cursor: pointer;
    color: rgba(0,0,0,0.8);
    z-index: 2010;
  }

  .close-btn:focus {
    outline: 2px solid rgba(0,113,227,0.2);
    border-radius: 6px;
  }

  .navbar-content.open .close-btn {
    display: block;
  }
  
  .btnSolicitarProjeto,
  .highlight {
    padding: 12px 24px;
    font-size: 1rem;
  }
  
  .lens {
    display: none;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  100% {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  }
}
</style>
