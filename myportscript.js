// Smooth scroll to section when clicking sidebar
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });

        // Update active class
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const sidebarItems = document.querySelectorAll('.sidebar li');

    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // offset for fixed sidebar
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    sidebarItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-section') === current);
    });
});

// Show Today’s Date button
document.getElementById('show-date-btn').addEventListener('click', () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date-output').innerHTML = 
        `<i class="ri-calendar-check-line"></i> Today is: <strong>${date.toLocaleDateString('en-US', options)}</strong>`;
});

// Fade in sections when they enter viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});