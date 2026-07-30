/* =====================================================================
   PORTFOLIO SCRIPT
   Modular, lightweight vanilla JavaScript. Each section below handles
   one responsibility and is initialized from the bottom of this file.
   ===================================================================== */

'use strict';

/* =====================================================================
   1. NAVBAR: scrolled state + mobile menu toggle
   ===================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!navbar || !menuToggle || !navLinks) return;

  // Add a background/shadow to the navbar once the page is scrolled
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Toggle mobile menu open/closed
  function toggleMenu(forceClose) {
    const shouldOpen =
      forceClose === true ? false : !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', shouldOpen);
    menuToggle.classList.toggle('open', shouldOpen);
    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    menuToggle.setAttribute(
      'aria-label',
      shouldOpen ? 'Close menu' : 'Open menu',
    );
  }

  menuToggle.addEventListener('click', () => toggleMenu());

  // Close mobile menu whenever a nav link is clicked
  navLinks.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close mobile menu if the user resizes back to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) toggleMenu(true);
  });
}

/* =====================================================================
   2. SMOOTH SCROLL for in-page anchor links
   (native CSS `scroll-behavior: smooth` already handles most of this;
   this adds a safe fallback and keeps focus management accessible)
   ===================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Move focus to the target section for keyboard/screen-reader users
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/* =====================================================================
   3. ACTIVE NAV LINK highlighting based on the section in view
   ===================================================================== */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('main section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');

  if (!sections.length || !navLinks.length) return;

  function updateActiveSection() {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active-link');

      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
}

/* =====================================================================
   4. SCROLL REVEAL animations (fade-in + slide-up on scroll)
   ===================================================================== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  // If the browser doesn't support IntersectionObserver, just show everything
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target); // animate once, keep it lightweight
        }
      });
    },
    { threshold: 0.15 },
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* =====================================================================
   5. BACK TO TOP button
   ===================================================================== */
function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  function toggleVisibility() {
    button.classList.toggle('visible', window.scrollY > 500);
  }

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =====================================================================
   6. FOOTER: auto-update the year
   ===================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

/* =====================================================================
   INIT: run everything once the DOM is ready
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initActiveNavHighlight();
  initScrollReveal();
  initBackToTop();
  initFooterYear();
});
