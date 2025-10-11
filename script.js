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
      const nav = document.getElementById('navMenu');
      if (nav?.classList.contains('show')) {
        bootstrap.Collapse.getInstance(nav)?.hide();
      }
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 20 
      ? '0 4px 30px rgba(0,0,0,.15)' 
      : '0 2px 20px rgba(0,0,0,.08)';
  }
});
