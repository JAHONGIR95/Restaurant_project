// ===== show menu =====
const toggle = document.getElementById('nav-toggle')
const menu = document.getElementById('nav-menu')

if(toggle && menu){
    toggle.addEventListener('click', () =>{
        menu.classList.toggle('show-menu')
    })
}

// ==== remove menu ====
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(item => item.addEventListener('click', () =>{
    menu.classList.remove('show-menu')
}))

// ==== scroll active section ====
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        // console.log(sectionId + ' top');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // console.log('haaa', scrollY, sectionTop, sectionTop + sectionHeight);
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ==== scroll changing header ====
function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// ==== scroll top ====
function scrollTop(){
    const scroll = document.getElementById('scroll-top')

    if(this.scrollY >= 560) scroll.classList.add('visible');
    else scroll.classList.remove('visible');
}
window.addEventListener('scroll', scrollTop)

// ============== Dard Light Theme ================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtaining the dark theme is added or not
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// logic of the function
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll reveal js
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})