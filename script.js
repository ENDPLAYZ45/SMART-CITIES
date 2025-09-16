// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal animation on scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);








// Feedback Modal logic
const feedbackBtn = document.getElementById('openFeedback');
const feedbackModal = document.getElementById('feedbackModal');
const closeFeedback = document.getElementById('closeFeedback');

if (feedbackBtn && feedbackModal && closeFeedback) {
  feedbackBtn.addEventListener('click', () => {
    feedbackModal.classList.add('active');
  });
  closeFeedback.addEventListener('click', () => {
    feedbackModal.classList.remove('active');
  });
  feedbackModal.addEventListener('click', (e) => {
    if (e.target === feedbackModal) feedbackModal.classList.remove('active');
  });
}

// Auth Modal logic
const authBtn = document.getElementById('openAuth');
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');

if (authBtn && authModal && closeAuth) {
  authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('active');
  });
  closeAuth.addEventListener('click', () => {
    authModal.classList.remove('active');
  });
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.classList.remove('active');
  });
}

// Optional: Prevent form submission (demo only)
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackModal.classList.remove('active');
    alert('Thank you for your feedback!');
  });
}
const authForm = document.getElementById('authForm');
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authModal.classList.remove('active');
    alert('Logged in (demo)');
  });
}






