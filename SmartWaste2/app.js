const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {

    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });

    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
        if (navigation.classList.contains('active')) {
            navigation.classList.remove('active');
        }
    });
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}

let next = document.querySelector('.next1')
let prev = document.querySelector('.prev1')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide2').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide2').prepend(items[items.length - 1])
});

