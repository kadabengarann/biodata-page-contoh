//-----Untuk mobile nav------
const mobileNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mbl-nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('mbl-nav-geser');
        burger.classList.toggle('toggle');
    });
}
mobileNav();