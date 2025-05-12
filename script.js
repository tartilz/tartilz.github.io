// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
// Adjusted to include mobile nav links as well
document.querySelectorAll('nav a, .mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        // Check if the target is a section ID (starts with # and is not just #)
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
             const targetSection = document.querySelector(targetId);
             if (targetSection) {
                 window.scrollTo({
                     top: targetSection.offsetTop - 80, // Adjust for fixed header height
                     behavior: 'smooth'
                 });
             }
        }
        // Handle potential clicks on '#' links gracefully if needed, though default prevention stops them
    });
});


// Removed Dark/Light Mode Toggle JavaScript

// Scroll Animation for Nav Shadow
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = 'var(--shadow)'; // Use the shadow variable
    } else {
        nav.style.boxShadow = 'none';
    }
});
