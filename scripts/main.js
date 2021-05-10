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
            console.log('haaa', scrollY, sectionTop, sectionTop + sectionHeight);
            // document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
    else{
        console.log('yuqqq');
    //         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
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
window.addEventListener('click', scrollTop)
