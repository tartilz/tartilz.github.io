// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Update active link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Staggered animation for elements
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach((element, index) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.animationDelay = `${index * 0.1}s`;
      element.classList.add('animate');
    }
  });
}

// Initialize animations
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission handling
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    try {
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;
      
      // Simulate form submission (replace with actual fetch request)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
      form.reset();
      
      setTimeout(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }, 2000);
    } catch (error) {
      submitButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
      console.error('Form submission error:', error);
      
      setTimeout(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }, 2000);
    }
  });
}

// Add hover effect to social icons
const socialIcons = document.querySelectorAll('.social a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.querySelector('i').style.transform = 'scale(1.2)';
  });
  
  icon.addEventListener('mouseleave', () => {
    icon.querySelector('i').style.transform = 'scale(1)';
  });
});

// Set current year in footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Tartil. All rights reserved.`;
