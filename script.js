/* ─── NEURAL NETWORK CANVAS ────────────────────────────────────── */
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
  resize();
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.radius = Math.random() * 1.5 + 0.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(124, 115, 255, 0.5)';
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const numParticles = Math.min(Math.floor((width * height) / 15000), 100);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(124, 115, 255, ${0.15 - distance / 1000})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }
  connectParticles();
  requestAnimationFrame(animate);
}

resize();
initParticles();
animate();

/* ─── TYPEWRITER EFFECT ──────────────────────────────────────── */
const roles = [
  "Building Vision Systems",
  "Optimizing RAG Pipelines",
  "Scaling Backend Architectures",
  "Deploying Models to Production"
];
const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? erasingDelay : typingDelay;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = newTextDelay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, 1000);
});

/* ─── SCROLL ANIMATIONS (AOS Alternative) ────────────────────── */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});

/* ─── NAVBAR SCROLL EFFECT ───────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ─── MOBILE MENU TOGGLE ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '100%';
  navLinks.style.left = '0';
  navLinks.style.width = '100%';
  navLinks.style.background = 'var(--bg-alt)';
  navLinks.style.padding = '2rem';
  navLinks.style.borderBottom = '1px solid var(--outline)';
});

/* ─── FORM SUBMISSION MOCK ───────────────────────────────────── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = 'var(--secondary)';
    form.reset();
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  });
}
