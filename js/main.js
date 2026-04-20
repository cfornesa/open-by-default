// ========================================
// Open by Default - Main JavaScript
// Progressive Enhancement Only
// All pages must function fully without this script
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Open by Default initialized')

  // Mobile Navigation Menu Implementation
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')

  if (menuToggle && navLinks) {
    function toggleMenu() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
      menuToggle.setAttribute('aria-expanded', String(!isExpanded))
      navLinks.classList.toggle('active')

      if (!isExpanded) {
        const firstLink = navLinks.querySelector('a')
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 250)
        }
      }
    }

    menuToggle.addEventListener('click', toggleMenu)

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        if (menuToggle.getAttribute('aria-expanded') === 'true') {
          toggleMenu()
        }
      }
    })

    // Close menu with Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu()
        menuToggle.focus()
      }
    })
  }
})