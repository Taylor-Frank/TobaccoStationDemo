// ========================
// INTRO SCREEN
// ========================
const intro = document.getElementById('intro');
const introFill = document.getElementById('introFill');

// Apply sign classes after DOM ready
document.querySelectorAll('.nav-logo, .intro-logo, .footer-logo').forEach(el => {
  el.classList.add('sign-block');
});

// Start progress bar then hide intro
window.addEventListener('load', () => {
  setTimeout(() => { introFill.style.width = '100%'; }, 100);
  setTimeout(() => { intro.classList.add('hidden'); }, 2000);
});

// ========================
// NAV SCROLL
// ========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

// ========================
// MOBILE MENU
// ========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ========================
// ROTATING REVIEWS
// ========================
const cards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.rdot');
let current = 0;
let reviewTimer;

function showReview(index) {
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  cards[index].classList.add('active');
  dots[index].classList.add('active');
  current = index;
}

function nextReview() {
  showReview((current + 1) % cards.length);
}

reviewTimer = setInterval(nextReview, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(reviewTimer);
    showReview(i);
    reviewTimer = setInterval(nextReview, 4000);
  });
});

// ========================
// SCROLL FADE-IN
// ========================
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => observer.observe(el));
