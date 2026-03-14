// Scroll-driven animation utilities inspired by Apple's design language

/**
 * Basic scroll animation - fades in elements as they enter viewport
 */
export function scrollAnimation() {
  const elements = document.querySelectorAll('[data-scroll]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
  
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}

/**
 * Apple-style text reveal animation - characters appear sequentially
 */
export function textRevealAnimation() {
  const elements = document.querySelectorAll('[data-text-reveal]');
  
  elements.forEach((element) => {
    const text = element.textContent || '';
    const words = text.split(' ');
    
    element.innerHTML = words.map((word, i) => 
      `<span class="word" style="--word-index: ${i}">
        ${word.split('').map((char, j) => 
          `<span class="char" style="--char-index: ${j}">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('')}
      </span>`
    ).join(' ');
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
  
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}

/**
 * Scroll-synced text animation - text scales/fades based on scroll position
 */
export function scrollSyncText() {
  const elements = document.querySelectorAll('[data-scroll-sync]');
  
  function updateOnScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress (0 to 1) as element moves through viewport
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ));
      
      // Apply transformations based on scroll progress
      const scale = 0.8 + (progress * 0.2); // Scale from 0.8 to 1
      const opacity = progress;
      
      (element as HTMLElement).style.transform = `scale(${scale})`;
      (element as HTMLElement).style.opacity = opacity.toString();
    });
  }
  
  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll(); // Initial call
  
  return () => {
    window.removeEventListener('scroll', updateOnScroll);
  };
}

/**
 * Slide-in animation for sections - Apple-style smooth reveals
 */
export function slideInAnimation() {
  const elements = document.querySelectorAll('[data-slide-in]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const direction = entry.target.getAttribute('data-slide-in') || 'up';
        entry.target.classList.add('slide-in-active');
        entry.target.setAttribute('data-slide-direction', direction);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
  
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}

/**
 * Parallax scroll effect with multiple speeds
 */
export function parallaxScroll() {
  if (typeof window === 'undefined') return () => {};

  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
      const yPos = -(scrolled * speed);
      (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });

  return () => {
    window.removeEventListener('scroll', requestTick);
  };
}

/**
 * Scroll progress indicator per section
 */
export function scrollProgress() {
  if (typeof window === 'undefined') return () => {};

  const updateProgress = () => {
    const sections = document.querySelectorAll('[data-scroll-progress]');
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      (section as HTMLElement).style.setProperty('--scroll-progress', progress.toString());
    });
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  return () => {
    window.removeEventListener('scroll', updateProgress);
  };
}
