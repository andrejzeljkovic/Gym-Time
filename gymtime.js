const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const nav = document.querySelector('nav');




openMenu.addEventListener('click',() => {
    menu.classList.add('open');
});


closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
});

window.addEventListener('scroll', () =>{
let scrollY = window.scrollY;
scrollY > 70 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
} )

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollY > 500 
    ? scrollTop.classList.add("active") 
    : scrollTop.classList.remove("active");
}) 

scrollTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});