// ========================================
// Open by Default - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Open by Default initialized')

  // ----- Mobile Navigation -----
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

  // ----- Unique animations for each card background -----
  const cardBackgrounds = document.querySelectorAll('.tool-card .card-background, .carousel-item .card-background, .articles-container .article-item .card-background')
  cardBackgrounds.forEach(bg => {
    const duration = (Math.random() * 12 + 8).toFixed(1)   // 8–20s (more variety)
    const delay = (Math.random() * 6).toFixed(1)           // 0–6s
    bg.style.webkitAnimation = `cardPulseRotateDrift ${duration}s infinite alternate ease-in-out`
    bg.style.animation = `cardPulseRotateDrift ${duration}s infinite alternate ease-in-out`
    bg.style.animationDelay = `${delay}s`
    
    // Set explicit transition for iOS Safari
    bg.style.webkitTransition = 'background-color 4s ease-in-out'
    bg.style.transition = 'background-color 4s ease-in-out'
    
    // Random muted color with RGB max value of 100, opacity 0.25 to 0.75
    const r = Math.floor(Math.random() * 76);
    const g = Math.floor(Math.random() * 76);
    const b = Math.floor(Math.random() * 76);
    const opacity = (Math.random() * 0.1 + 0.1).toFixed(2)
    bg.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`
  })

  // Helper: generate a random muted color (low saturation, medium lightness)
function getRandomMutedColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const opacity = (Math.random() * 0.5 + 0.1).toFixed(2)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// For each card background, start a slow colour cycle
const allCardBackgrounds = document.querySelectorAll('.tool-card .card-background, .carousel-item .card-background, .articles-container .article-item .card-background');

allCardBackgrounds.forEach(bg => {
  // Set explicit transition for iOS Safari
  bg.style.webkitTransition = 'background-color 4s ease-in-out'
  bg.style.transition = 'background-color 4s ease-in-out'
  
  // Set initial random muted colour
  bg.style.backgroundColor = getRandomMutedColor();

  // Change colour every 5 to 10 seconds
  const intervalTime = 5000 + Math.random() * 5000; // 5–10s
  setInterval(() => {
    // Ensure transition is set before changing color for iOS Safari
    bg.style.webkitTransition = 'background-color 4s ease-in-out'
    bg.style.transition = 'background-color 4s ease-in-out'
    bg.style.backgroundColor = getRandomMutedColor();
  }, intervalTime);
});

  // ----- Carousel (only once) -----
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

  // ----- Shape & Interaction Systems (geometric background shapes) -----
  const shapes = document.querySelectorAll('[class^="geometric-shape-"]')
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (shapes.length > 0 && !prefersReducedMotion) {
    // Scroll‑based shape movement
    let lastScrollY = window.scrollY
    let scrollTicking = false
    function updateShapesOnScroll() {
      const scrollDelta = window.scrollY - lastScrollY
      const root = document.documentElement
      const speed = parseFloat(getComputedStyle(root).getPropertyValue('--movement-speed')) || 1
      shapes.forEach((shape, index) => {
        const direction = index % 2 === 0 ? -1 : 1
        const offset = scrollDelta * speed * direction * (0.5 + index * 0.2)
        const currentTransform = shape.style.transform || ''
        const existingTranslate = currentTransform.match(/translateY\(([^)]+)px\)/)
        const existingOffset = existingTranslate ? parseFloat(existingTranslate[1]) : 0
        const cleanTransform = currentTransform.replace(/translateY\([^)]+px\)/, '').trim()
        shape.style.transform = cleanTransform + ` translateY(${existingOffset + offset}px)`
      })
      lastScrollY = window.scrollY
      scrollTicking = false
    }
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateShapesOnScroll)
        scrollTicking = true
      }
    }, { passive: true })

    // Cursor‑based shape movement
    let cursorX = 0, cursorY = 0, cursorTicking = false
    document.addEventListener('mousemove', (event) => {
      cursorX = event.clientX
      cursorY = event.clientY
      if (!cursorTicking) {
        requestAnimationFrame(() => {
          const speed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--movement-speed')) || 1
          shapes.forEach((shape, index) => {
            const rect = shape.getBoundingClientRect()
            const shapeCenterX = rect.left + rect.width / 2
            const shapeCenterY = rect.top + rect.height / 2
            const deltaX = (cursorX - shapeCenterX) * 0.02 * speed
            const deltaY = (cursorY - shapeCenterY) * 0.015 * speed
            const currentTransform = shape.style.transform || ''
            const existingMatch = currentTransform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/)
            let baseX = 0, baseY = 0
            if (existingMatch) {
              baseX = parseFloat(existingMatch[1])
              baseY = parseFloat(existingMatch[2])
            }
            const newOffsetX = baseX + deltaX * (1 + index * 0.3)
            const newOffsetY = baseY + deltaY * (1 + index * 0.3)
            shape.style.transform = `translate(${newOffsetX}px, ${newOffsetY}px)`
          })
          cursorTicking = false
        })
        cursorTicking = true
      }
    })

    // Multi‑layer autonomous animations
    const autonomousShapes = [], generativeShapes = []
    shapes.forEach((shape, index) => {
      if (index % 3 === 0) return // userShapes (not used)
      if (index % 3 === 1) autonomousShapes.push(shape)
      else generativeShapes.push(shape)
    })
    autonomousShapes.forEach((shape, idx) => {
      shape.dataset.behaviorType = ['orbit', 'pulse', 'drift'][idx % 3]
      shape.dataset.behaviorSpeed = 0.5 + Math.random()
    })
    generativeShapes.forEach(shape => {
      shape.dataset.complexity = 0.5 + Math.random() * 0.5
    })

    function animateShapes(time) {
      const seconds = time * 0.001
      autonomousShapes.forEach(shape => {
        const type = shape.dataset.behaviorType
        const speed = parseFloat(shape.dataset.behaviorSpeed)
        const cur = shape.style.transform || ''
        if (type === 'orbit') {
          const radius = 50 + Math.random() * 30
          const angle = seconds * speed * 0.5
          shape.style.transform = cur + ` translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
        } else if (type === 'pulse') {
          const scale = 0.8 + Math.sin(seconds * speed) * 0.2
          shape.style.transform = cur + ` scale(${scale})`
        } else if (type === 'drift') {
          const dx = Math.sin(seconds * speed * 0.3) * 30
          const dy = Math.cos(seconds * speed * 0.2) * 20
          shape.style.transform = cur + ` translate(${dx}px, ${dy}px)`
        }
      })
      generativeShapes.forEach(shape => {
        const complexity = parseFloat(shape.dataset.complexity)
        const xMotion = Math.sin(seconds * 0.2 * complexity) * 40 + Math.sin(seconds * 0.5 * complexity * 1.3) * 20
        const yMotion = Math.cos(seconds * 0.3 * complexity) * 35 + Math.cos(seconds * 0.7 * complexity * 1.1) * 15
        shape.style.transform = (shape.style.transform || '') + ` translate(${xMotion}px, ${yMotion}px)`
      })
      requestAnimationFrame(animateShapes)
    }
    requestAnimationFrame(animateShapes)
  }

  // ----- Text‑Shape Harmony System -----
  const textElements = document.querySelectorAll('h1, h2, h3, .hero-lead, .text-content, .tool-content p, .article-content p')
  if (textElements.length > 0 && shapes.length > 0 && !prefersReducedMotion) {
    function calculateDistance(el1, el2) {
      const r1 = el1.getBoundingClientRect(), r2 = el2.getBoundingClientRect()
      const cx1 = r1.left + r1.width/2, cy1 = r1.top + r1.height/2
      const cx2 = r2.left + r2.width/2, cy2 = r2.top + r2.height/2
      return Math.hypot(cx2 - cx1, cy2 - cy1)
    }
    function updateTextStates() {
      const radius = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--shape-interaction-radius')) || 150
      textElements.forEach(textEl => {
        let closest = Infinity
        shapes.forEach(shape => { closest = Math.min(closest, calculateDistance(textEl, shape)) })
        if (closest < radius) {
          textEl.classList.add('shape-near')
          textEl.classList.remove('shape-far')
        } else if (closest > radius * 2) {
          textEl.classList.add('shape-far')
          textEl.classList.remove('shape-near')
        }
      })
    }
    updateTextStates()
    let harmonyTick = false
    window.addEventListener('scroll', () => {
      if (!harmonyTick) {
        requestAnimationFrame(() => { updateTextStates(); harmonyTick = false })
        harmonyTick = true
      }
    }, { passive: true })
    window.addEventListener('resize', () => requestAnimationFrame(updateTextStates), { passive: true })
  }

  // ----- Scroll‑velocity for geometric shapes -----
  const geometricShapes = document.querySelectorAll('.geometric-shape')
  if (geometricShapes.length > 0) {
    let lastScrollTime = 0, scrollVelocity = 1
    function updateScrollVelocity() {
      const now = performance.now()
      const delta = now - lastScrollTime
      lastScrollTime = now
      if (delta > 0) scrollVelocity = Math.min(4, Math.max(1, scrollVelocity * 0.95 + 0.05))
      document.documentElement.style.setProperty('--scroll-velocity', scrollVelocity.toFixed(2))
    }
    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => { updateScrollVelocity(); ticking = false })
        ticking = true
      }
      clearTimeout(updateScrollVelocity.timeout)
      updateScrollVelocity.timeout = setTimeout(() => {
        scrollVelocity = 1
        document.documentElement.style.setProperty('--scroll-velocity', '1')
      }, 150)
    }, { passive: true })
  }

  // ===== iOS JS ANIMATIONS =====
  // JS-based animations for iOS Safari (better compatibility)
  // Feature detection: check if CSS animations might fail
  const testElement = document.createElement('div');
  const hasCSSAnimation = testElement.style.animation !== undefined;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && 
    (/iPhone|iPad|iPod/.test(navigator.userAgent) || ('ontouchend' in document && !/Android/.test(navigator.userAgent)));
  
  // Use JS animations on iOS devices or when CSS animations might fail
  if (isIOS || (isSafari && hasCSSAnimation)) {
    const shapes = document.querySelectorAll('.geometric-shape');
    if (shapes.length > 0) {
      console.log('Using JS animations for iOS Safari');
      
      // Disable CSS animations
      shapes.forEach(shape => {
        shape.style.animation = 'none';
        shape.style.webkitAnimation = 'none';
        shape.style.transform = 'translateZ(0)';
      });
      
      // Animation state for each shape
      const shapeStates = [];
      shapes.forEach((shape, index) => {
        const type = shape.getAttribute('data-art-type');
        shapeStates.push({
          element: shape,
          type: type,
          startTime: performance.now() + index * 500,
          // Random parameters for variety
          rotateSpeed: 0.0001 + Math.random() * 0.0002,
          scaleSpeed: 0.00015 + Math.random() * 0.00015,
          translateX: 0,
          translateY: 0,
          translateXSpeed: (Math.random() - 0.5) * 0.02,
          translateYSpeed: (Math.random() - 0.5) * 0.02,
          bounds: {
            maxX: window.innerWidth * 0.3,
            maxY: window.innerHeight * 0.25
          }
        });
      });
      
      // Animation loop
      function animateShapes(timestamp) {
        shapeStates.forEach(state => {
          const elapsed = timestamp - state.startTime;
          
          let transform = '';
          
          if (state.type === 'morph-rotate') {
            const rotate = elapsed * state.rotateSpeed * 360;
            const scale = 1 + Math.sin(elapsed * state.scaleSpeed * 2 * Math.PI) * 0.15;
            transform = `translateZ(0) rotate(${rotate}deg) scale(${scale})`;
            
          } else if (state.type === 'morph-triangle') {
            const translate = Math.sin(elapsed * 0.00005) * 50;
            const scale = 1 + Math.sin(elapsed * state.scaleSpeed * 2 * Math.PI) * 0.1;
            transform = `translateZ(0) translate(${translate}px, ${-translate}px) scale(${scale})`;
            
          } else if (state.type === 'pulse-scale') {
            const scale = 0.7 + Math.abs(Math.sin(elapsed * state.scaleSpeed * 2 * Math.PI)) * 0.3;
            const rotate = Math.sin(elapsed * state.rotateSpeed * 360) * 15;
            transform = `translateZ(0) scale(${scale}) rotate(${rotate}deg)`;
            
          } else if (state.type === 'drift-rotate') {
            const rotate = elapsed * state.rotateSpeed * 360;
            const translate = Math.sin(elapsed * 0.00003) * state.bounds.maxX;
            transform = `translateZ(0) translate(${translate}px, ${translate * 0.5}px) rotate(${rotate}deg)`;
          }
          
          state.element.style.transform = transform;
          state.element.style.webkitTransform = transform;
        });
        
        requestAnimationFrame(animateShapes);
      }
      
requestAnimationFrame(animateShapes);
      requestAnimationFrame(animateShapes);
      
      // ===== TITLE ANIMATION FOR iOS =====
      // Animate h1 title (titlePulse equivalent)
      const title = document.querySelector('h1');
      if (title) {
        title.style.animation = 'none';
        title.style.webkitAnimation = 'none';
        
        let titleLastUpdate = 0;
        const titleSpeed = 0.003;
        
        function animateTitle(timestamp) {
          const elapsed = timestamp;
          // Pulse shadow between 5px and 25px
          const shadowIntensity = 5 + Math.abs(Math.sin(elapsed * titleSpeed * Math.PI)) * 20;
          title.style.textShadow = `0 0 ${shadowIntensity}px rgba(255,77,77,0.2), 0 0 ${shadowIntensity * 2}px rgba(77,77,255,0.1)`;
          requestAnimationFrame(animateTitle);
        }
        
        requestAnimationFrame(animateTitle);
      }
      
      // ===== CARD BACKGROUND ANIMATIONS FOR iOS =====
      // Animate card backgrounds (pulse, rotate, drift)
      const cardBackgrounds = document.querySelectorAll('.tool-card .card-background, .carousel-item .card-background, .articles-container .article-item .card-background');
      if (cardBackgrounds.length > 0) {
        console.log('Using JS card animations for iOS Safari');
        
        // Disable CSS animations and set up for JS
        const cardStates = [];
        cardBackgrounds.forEach((bg, index) => {
          // Disable CSS animation
          bg.style.animation = 'none';
          bg.style.webkitAnimation = 'none';
          
          // Set initial random muted color
          const r = Math.floor(Math.random() * 76);
          const g = Math.floor(Math.random() * 76);
          const b = Math.floor(Math.random() * 76);
          const opacity = (Math.random() * 0.1 + 0.1).toFixed(2);
          bg.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          
          // Set up color transition
          bg.style.webkitTransition = 'background-color 4s ease-in-out';
          bg.style.transition = 'background-color 4s ease-in-out';
          
          cardStates.push({
            element: bg,
            startTime: performance.now() + index * 200,
            // Animation parameters - matching CSS cardPulseRotateDrift
            duration: 8 + Math.random() * 12, // 8-20s
            scaleSpeed: (Math.random() * 0.0002 + 0.0001),
            rotateSpeed: (Math.random() * 0.0001 + 0.00005),
            translateSpeed: (Math.random() * 0.0001 + 0.00005),
            lastColorChange: 0,
            colorInterval: 5000 + Math.random() * 5000
          });
        });
        
        // Card background animation loop
        function animateCards(timestamp) {
          cardStates.forEach(state => {
            const elapsed = timestamp - state.startTime;
            
            // Scale: oscillates between 1 and ~1.12
            const scale = 1 + Math.sin(elapsed * state.scaleSpeed * Math.PI) * 0.12;
            
            // Rotate: oscillates between -2deg and 2deg
            const rotate = Math.sin(elapsed * state.rotateSpeed * Math.PI) * 2;
            
            // Translate: small movement
            const translateX = Math.sin(elapsed * state.translateSpeed * Math.PI) * 3;
            const translateY = Math.cos(elapsed * state.translateSpeed * Math.PI) * 3;
            
            // Apply transform with webkit prefix
            const transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
            state.element.style.transform = transform;
            state.element.style.webkitTransform = transform;
            
            // Handle color changes
            if (timestamp - state.lastColorChange > state.colorInterval) {
              const r = Math.floor(Math.random() * 76);
              const g = Math.floor(Math.random() * 76);
              const b = Math.floor(Math.random() * 76);
              const opacity = (Math.random() * 0.1 + 0.1).toFixed(2);
              state.element.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
              state.lastColorChange = timestamp;
              state.colorInterval = 5000 + Math.random() * 5000;
            }
          });
          
          requestAnimationFrame(animateCards);
        }
        
        requestAnimationFrame(animateCards);
      }
      
      // ===== TOUCH/HOVER INTERACTIONS FOR iOS =====
      // Add touch feedback for cards
      const toolCards = document.querySelectorAll('.tool-card, .carousel-item, .articles-container .article-item');
      toolCards.forEach(card => {
        card.addEventListener('touchstart', function() {
          this.classList.add('touch-active');
        }, { passive: true });
        card.addEventListener('touchend', function() {
          this.classList.remove('touch-active');
        }, { passive: true });
      });
      
      // Add touch feedback for icons
      const toolIcons = document.querySelectorAll('.tool-icon, .carousel-icon, .article-icon');
      toolIcons.forEach(icon => {
        icon.style.webkitTransition = 'transform 0.3s ease';
        icon.style.transition = 'transform 0.3s ease';
      });
      
      // Add touch feedback to nav links
      const navLinksItems = document.querySelectorAll('.nav-links a');
      navLinksItems.forEach(link => {
        link.addEventListener('touchstart', function() {
          this.style.transform = 'scale(1.05)';
        }, { passive: true });
        link.addEventListener('touchend', function() {
          this.style.transform = '';
        }, { passive: true });
      });
    }
  }
})