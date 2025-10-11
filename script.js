// TAYARI Homepage JavaScript

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      if (navMenu?.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    }
  });
});

// Dynamic navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
  }
});
