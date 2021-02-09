const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const button = document.querySelector('.toggle-button');
const hamburger = document.querySelector('.menu-open');
const x = document.querySelector('.menu-close');

// Toggles the mobile menu based on the display property
function toggleMobileMenu() {
    // console.log("menu: " + getComputedStyle(mobileMenu).display)
    if (getComputedStyle(mobileMenu).display === 'none') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
}

// Toggles the hamburger .svg based on the display property
function toggleHamburger() {
    // console.log("hamburger: " + getComputedStyle(hamburger).display)
    if (getComputedStyle(hamburger).display === 'none') {
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
    }
}

// Toggles the x .svg based on the display property
function toggleX() {
    // console.log("x: " + getComputedStyle(x).display)
    if (getComputedStyle(x).display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function mobileMenuFunctionality() {
    // console.log("mobile menu functionality");
    toggleMobileMenu();
    toggleHamburger();
    toggleX();
}

// Hides the mobile menu when screen is enlarged to desktop size
function hideMobileMenu() {
    // console.log("desktopMenu: " + getComputedStyle(desktopMenu).display)
    if (getComputedStyle(desktopMenu).display === 'flex') {
        mobileMenu.style.display = 'none';
    }
}

button.onclick = mobileMenuFunctionality;
window.onresize = hideMobileMenu;

