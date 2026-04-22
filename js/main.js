// ========================================
// Open by Default - Main JavaScript
// Unified animation system for consistent cross-platform behavior
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Open by Default initialized')

  // ===== MOBILE NAVIGATION =====
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')

  if (menuToggle && navLinks) {
    function toggleMenu() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
      menuToggle.setAttribute('aria-expanded', String(!isExpanded))
      navLinks.classList.toggle('active')
      if (!isExpanded) {
        const firstLink = navLinks.querySelector('a')
        if (firstLink) setTimeout(() => firstLink.focus(), 250)
      }
    }
    menuToggle.addEventListener('click', toggleMenu)
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target) && menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu()
      }
    })
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu()
        menuToggle.focus()
      }
    })
  }

  // ===== CAROUSEL =====
  const carouselNext = document.querySelector('.carousel-next')
  const carouselContainer = document.querySelector('.carousel-container')
  if (carouselNext && carouselContainer) {
    let currentIndex = 0
    carouselNext.addEventListener('click', () => {
      const items = carouselContainer.querySelectorAll('.carousel-item')
      const itemCount = items.length
      const itemWidth = carouselContainer.querySelector('.carousel-item')?.offsetWidth || 300
      currentIndex = (currentIndex + 1) % itemCount
      carouselContainer.scrollTo({ left: currentIndex * (itemWidth + 32), behavior: 'smooth' })
    })
    carouselContainer.addEventListener('scroll', () => {
      const itemWidth = carouselContainer.querySelector('.carousel-item')?.offsetWidth || 300
      currentIndex = Math.round(carouselContainer.scrollLeft / (itemWidth + 32))
    }, { passive: true })
  }

  // ===== UNIFIED JS ANIMATIONS =====
  // All animations handled by JavaScript for consistent cross-platform behavior
  
  // Disable CSS animations globally
  const allAnimatedElements = document.querySelectorAll('.geometric-shape, .card-background, h1');
  allAnimatedElements.forEach(el => {
    el.style.animation = 'none';
    el.style.webkitAnimation = 'none';
  });
  
  // ===== GEOMETRIC SHAPE ANIMATIONS =====
  const shapes = document.querySelectorAll('.geometric-shape');
  if (shapes.length > 0) {
    console.log('Using unified shape JS animations');
    
    shapes.forEach(shape => {
      shape.style.animation = 'none';
      shape.style.webkitAnimation = 'none';
      shape.style.transform = 'translateZ(0)';
    });
    
    const shapeStates = [];
    shapes.forEach((shape, index) => {
      const type = shape.getAttribute('data-art-type');
      shapeStates.push({
        element: shape,
        type: type,
        startTime: performance.now() + index * 500,
        cycleDuration: 30000 + Math.random() * 10000,
        scaleAmount: 0.15,
        rotateAmount: 45,
        translateAmount: 50
      });
    });
    
    function animateShapesUnified(timestamp) {
      shapeStates.forEach(state => {
        const elapsed = timestamp - state.startTime;
        const cycleProgress = elapsed / state.cycleDuration;
        const phase = cycleProgress * Math.PI * 2;
        
        let transform = '';
        
        if (state.type === 'morph-rotate') {
          const rotate = Math.sin(phase) * state.rotateAmount;
          const scale = 1 + Math.sin(phase) * state.scaleAmount;
          transform = `translateZ(0) rotate(${rotate}deg) scale(${scale})`;
        } else if (state.type === 'morph-triangle') {
          const translate = Math.sin(phase) * state.translateAmount;
          const scale = 1 + Math.sin(phase * 1.5) * state.scaleAmount;
          transform = `translateZ(0) translate(${translate}px, ${-translate}px) scale(${scale})`;
        } else if (state.type === 'pulse-scale') {
          const scale = 0.7 + (Math.sin(phase) + 1) * 0.15;
          const rotate = Math.sin(phase) * 15;
          transform = `translateZ(0) scale(${scale}) rotate(${rotate}deg)`;
        } else if (state.type === 'drift-rotate') {
          const rotate = Math.sin(phase) * 30;
          const translate = Math.sin(phase * 0.5) * 100;
          transform = `translateZ(0) translate(${translate}px, ${translate * 0.5}px) rotate(${rotate}deg)`;
        }
        
        state.element.style.transform = transform;
        state.element.style.webkitTransform = transform;
      });
      
      requestAnimationFrame(animateShapesUnified);
    }
    
    requestAnimationFrame(animateShapesUnified);
  }

  // ===== TITLE ANIMATION =====
  const title = document.querySelector('h1');
  if (title) {
    title.style.animation = 'none';
    title.style.webkitAnimation = 'none';
    
    function animateTitle(timestamp) {
      const shadowIntensity = 5 + Math.abs(Math.sin(timestamp * 0.003 * Math.PI)) * 20;
      title.style.textShadow = `0 0 ${shadowIntensity}px rgba(255,77,77,0.2), 0 0 ${shadowIntensity * 2}px rgba(77,77,255,0.1)`;
      requestAnimationFrame(animateTitle);
    }
    
    requestAnimationFrame(animateTitle);
  }

  // ===== CARD BACKGROUND ANIMATIONS =====
  const cardBackgrounds = document.querySelectorAll('.tool-card .card-background, .carousel-item .card-background, .articles-container .article-item .card-background');
  if (cardBackgrounds.length > 0) {
    console.log('Using unified card JS animations');
    
    const cardStates = [];
    cardBackgrounds.forEach((bg, index) => {
      bg.style.animation = 'none';
      bg.style.webkitAnimation = 'none';
      
      // Generate unique random muted color (RGB 0-100, opacity 0.15-0.6)
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const opacity = (Math.random() * 0.45 + 0.15).toFixed(2);
      bg.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      
      bg.style.webkitTransition = 'background-color 4s ease-in-out, border-radius 4s ease-in-out';
      bg.style.transition = 'background-color 4s ease-in-out, border-radius 4s ease-in-out';
      
      // Generate unique border-radius values for each card
      const baseRadius = 28;
      const radiusVariation = Math.random() * 20; // 0-20% variation
      
      cardStates.push({
        element: bg,
        startTime: performance.now() + index * 200,
        cycleDuration: 8000 + Math.random() * 12000,
        lastColorChange: 0,
        colorInterval: 5000 + Math.random() * 5000,
        // Unique border-radius parameters per card
        radiusPhase: Math.random() * Math.PI * 2, // Random starting phase
        radiusSpeed: 0.0001 + Math.random() * 0.0002, // Random speed
        baseRadius: baseRadius + (Math.random() - 0.5) * radiusVariation,
        radiusVariation: 10 + Math.random() * 14 // 10-24% variation
      });
    });
    
    function animateCards(timestamp) {
      cardStates.forEach(state => {
        const elapsed = timestamp - state.startTime;
        const cycleProgress = elapsed / state.cycleDuration;
        const phase = cycleProgress * Math.PI * 2;
        
        // Transform animation
        const scale = 1 + Math.sin(phase) * 0.12;
        const rotate = Math.sin(phase) * 2;
        const translateX = Math.sin(phase) * 3;
        const translateY = Math.cos(phase) * 3;
        const transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
        state.element.style.transform = transform;
        state.element.style.webkitTransform = transform;
        
        // Unique border-radius morphing per card
        const radiusPhase = elapsed * state.radiusSpeed + state.radiusPhase;
        const radiusOffset = Math.sin(radiusPhase) * state.radiusVariation;
        const currentRadius = state.baseRadius + radiusOffset;
        // Create varied border-radius (can use % or px)
        const radiusTL = (currentRadius + Math.sin(radiusPhase * 1.1) * 5).toFixed(1);
        const radiusTR = (currentRadius + Math.sin(radiusPhase * 1.3) * 5).toFixed(1);
        const radiusBR = (currentRadius + Math.sin(radiusPhase * 1.5) * 5).toFixed(1);
        const radiusBL = (currentRadius + Math.sin(radiusPhase * 1.7) * 5).toFixed(1);
        state.element.style.borderRadius = `${radiusTL}% ${radiusTR}% ${radiusBR}% ${radiusBL}%`;
        
        // Color transition (every 5-10 seconds)
        if (timestamp - state.lastColorChange > state.colorInterval) {
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          const opacity = (Math.random() * 0.45 + 0.15).toFixed(2);
          state.element.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          state.lastColorChange = timestamp;
          state.colorInterval = 5000 + Math.random() * 5000;
        }
      });
      
      requestAnimationFrame(animateCards);
    }
    
    requestAnimationFrame(animateCards);
  }

  // ===== TOUCH/HOVER INTERACTIONS =====
  const toolCards = document.querySelectorAll('.tool-card, .carousel-item, .articles-container .article-item');
  toolCards.forEach(card => {
    card.addEventListener('touchstart', function() {
      this.classList.add('touch-active');
    }, { passive: true });
    card.addEventListener('touchend', function() {
      this.classList.remove('touch-active');
    }, { passive: true });
  });
  
  const toolIcons = document.querySelectorAll('.tool-icon, .carousel-icon, .article-icon');
  toolIcons.forEach(icon => {
    icon.style.webkitTransition = 'transform 0.3s ease';
    icon.style.transition = 'transform 0.3s ease';
  });
  
  const navLinksItems = document.querySelectorAll('.nav-links a');
  navLinksItems.forEach(link => {
    link.addEventListener('touchstart', function() {
      this.style.transform = 'scale(1.05)';
    }, { passive: true });
    link.addEventListener('touchend', function() {
      this.style.transform = '';
    }, { passive: true });
  });
})