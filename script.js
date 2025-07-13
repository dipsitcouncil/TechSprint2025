// Fade-in on scroll
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeIns.forEach(el => observer.observe(el));

// Reveal navbar on load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navbar').classList.add('visible');
});

// Particles.js initialization
document.addEventListener('DOMContentLoaded', function () {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: '#00d4fa' },
                shape: { type: 'circle' },
                opacity: { value: 0.7, random: true },
                size: { value: 4, random: true },
                line_linked: { enable: true, distance: 120, color: '#00d4fa', opacity: 0.6, width: 1.2 },
                move: { enable: true, speed: 1.8, direction: 'none', out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 180, line_linked: { opacity: 0.8 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    } else {
        console.error('particlesJS library not loaded.');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY + 200;
    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
