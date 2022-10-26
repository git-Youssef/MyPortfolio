/*==================== PRELOADE ====================*/

const preloaderContainer = document.querySelector(".preloader__container");

window.scrollTo(0, 0);

window.onload = function () {
    preloaderContainer.style.display = "none";
    document.querySelector(".home").classList.add("fadeInTop");
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*==================== REMOVE MENU MOBILE ====================*/

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link , we remove show-menu class
    navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        // remove & add class to tabContents
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });

        target.classList.add("qualification__active");

        // remove & add class to tabs
        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/

const servicesModal = document.querySelectorAll(".services__modal"),
    modalButtons = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    servicesModal[modalClick].classList.add("active-modal");
};

modalButtons.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    })
});

modalCloses.forEach((mdClose, i) => {
    mdClose.addEventListener('click', () => {
        servicesModal[i].classList.remove("active-modal");
    })
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {

    const scrollY = window.pageYOffset;

    sections.forEach(currentSec => {

        const sectionHeight = currentSec.offsetHeight;
        const sectionOffsetTop = currentSec.offsetTop;
        const sectionId = currentSec.id;

        if (scrollY > sectionOffsetTop && scrollY <= sectionOffsetTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');

        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER  ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== Add FadeInTop Class when section shows up ====================*/

const allSections = document.querySelectorAll('section:not(.home)');

function addFadeClase() {

    const scrollY = window.pageYOffset;

    allSections.forEach(currentSec => {

        const sectionHeight = currentSec.offsetHeight;
        const sectionOffsetTop = currentSec.offsetTop;
 
        if (scrollY >= sectionOffsetTop - sectionHeight + 100) {
  
            currentSec.classList.add("fadeInTop");

        } 
    })
}

window.addEventListener('scroll', addFadeClase);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('uil-sun') ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove']('uil-sun')
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('uil-sun');
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})