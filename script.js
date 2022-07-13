console.log('hello');

const hemBarger = document.querySelector('.hemBarger');
const navbar = document.querySelector('.navbar');
const navigation_menu = document.querySelector('.navigation_menu')
const search = document.querySelector('.search');

hemBarger.addEventListener('click', ()=>{
    console.log('clicked');
    navbar.classList.toggle('h-nav-resp');
    navigation_menu.classList.toggle('v-class-resp');
    search.classList.toggle('v-class-resp');
})
