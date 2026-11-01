//! script.js — Client-side interactions for Ajmeer's portfolio

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(function (section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Skill progress bars animation on scroll
  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-progress').forEach(function (progress) {
          const targetWidth = progress.style.width;
          progress.style.width = '0';
          setTimeout(function () {
            progress.style.width = targetWidth;
          }, 100);
        });
      }
    });
  }, observerOptions);

  skillObserver.observe(document.querySelector('.skills'));
});