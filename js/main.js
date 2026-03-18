// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
}

// CLOSE MENU ON LINK CLICK
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = 
      '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// CONTACT FORM VALIDATION
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('successMsg');

  // Clear errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  let isValid = true;

  // Validate name
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required!';
    isValid = false;
  }

  // Validate email
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required!';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = 'Enter a valid email!';
    isValid = false;
  }

  // Validate message
  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required!';
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.style.display = 'block';
    form.reset();
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  }
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.service-card, .plan-card, .trainer-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});