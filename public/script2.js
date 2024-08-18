/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== WORK MODAL HANDLING =====*/
const images = document.querySelectorAll('.work__img');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Add click event listener to each image to open corresponding modal
images.forEach(image => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});
document.querySelectorAll('.work__img').forEach(img => {
    img.addEventListener('click', function(event) {
        event.preventDefault();
        const iframeSrc = this.getAttribute('data-src');
        document.getElementById('iframe').src = iframeSrc;
        document.getElementById('iframeContainer').classList.remove('hidden');
    });
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('iframeContainer').classList.add('hidden');
    document.getElementById('iframe').src = ''; // Clear iframe src to stop loading
});
// Add click event listener to each close button to close modal
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close the modal if the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true  // Uncomment to make animations repeat on scroll
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
