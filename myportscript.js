// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.add('active');
});

document.querySelector('.close-mobile').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.remove('active');
});

// Close mobile menu on item click
document.querySelectorAll('.mobile-nav li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.remove('active');
    });
});

// Smooth scroll and active state
document.querySelectorAll('.nav-menu li').forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.nav-menu li').forEach(li => {
            li.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Active on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-section') === current);
    });
});

// Fade in sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));
