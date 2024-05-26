// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
        button.classList.add('btn-primary');
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Animated Progress Bars
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
            bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
