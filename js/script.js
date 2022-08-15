let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   searchBtn.classList.remove('fa-times');
   searchBar.classList.remove('active');
};

searchBtn.addEventListener('click', () =>{
   searchBtn.classList.toggle('fa-times');
   searchBar.classList.toggle('active');
});

loginBtn.addEventListener('click', () =>{
   loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
   loginForm.classList.remove('active');
});

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};



var swiper = new Swiper(".home-slider", {
   
   loop: true,
   autoplay: {
      delay: 4000,
    },
    disableOnInteraction: false,
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 6;

loadMoreBtn.onclick = () => {
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   };
};