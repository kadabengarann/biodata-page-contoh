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

document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        alert('NOPE');
        return false;
    } else {
        return true;
    }
};