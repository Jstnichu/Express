/* ===== MOBILE NAV ===== */
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');
const navMenu   = document.getElementById('nav-menu');

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show'));
if (navClose)  navClose.addEventListener('click',  () => navMenu.classList.remove('show'));

document.querySelectorAll('.nav__link').forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('show'))
);

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const top    = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        const link   = document.querySelector(`.nav__link[href="#${id}"]`);
        if (!link) return;

        if (scrollY >= top && scrollY < top + height) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ===== ROLE TEXT CYCLING ===== */
const roles = ['DevOps Engineer', 'AIOps Engineer', 'DevSecOps Engineer', 'Cloud Architect', 'LLMOps Practitioner', 'Python Automation Expert'];
let roleIndex = 0;
const roleEl  = document.getElementById('role-text');

if (roleEl) {
    setInterval(() => {
        roleEl.classList.add('fade-out');
        setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleEl.textContent = roles[roleIndex];
            roleEl.classList.remove('fade-out');
        }, 300);
    }, 2400);
}

/* ===== CONTACT FORM ===== */
const contactForm    = document.getElementById('contact-form');
const formSuccessMsg = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        if (formSuccessMsg) formSuccessMsg.classList.add('visible');
        contactForm.reset();
        setTimeout(() => formSuccessMsg && formSuccessMsg.classList.remove('visible'), 5000);
    });
}

/* ===== SCROLL REVEAL ===== */
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ origin: 'bottom', distance: '40px', duration: 800, delay: 100, reset: false });

    sr.reveal('.home__data',          { origin: 'left' });
    sr.reveal('.home__visual',        { origin: 'right', delay: 200 });
    sr.reveal('.about__img-wrap',     { origin: 'left' });
    sr.reveal('.about__data',         { origin: 'right', delay: 150 });
    sr.reveal('.skill__item',         { interval: 80 });
    sr.reveal('.project__card',        { interval: 100 });
    sr.reveal('.exp__item',           { interval: 120 });
    sr.reveal('.patent__card',        { interval: 100 });
    sr.reveal('.award__card',         { interval: 80 });
    sr.reveal('.cert__card',          { interval: 80 });
    sr.reveal('.activity__card',      { interval: 100 });
    sr.reveal('.contact__info',       { origin: 'left' });
    sr.reveal('.contact__form',       { origin: 'right', delay: 150 });
}
