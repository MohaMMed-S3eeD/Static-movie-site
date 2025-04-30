// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let aLinks = document.querySelectorAll(".navbar li a");
let logo = document.querySelector(".logo");
let menu_mob = document.querySelectorAll(".menu-mob li a");
let menu = document.querySelector(".menu-mob");
let btn_menu = document.querySelector(".btn-menu");




menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
// window.addEventListener('scroll', () => {
//     header.classList.toggle("shadow" , window.scrollY > 0);
// });

window.addEventListener('scroll', () => {
  header.classList.toggle("shadow-md", window.scrollY > 0);
  header.classList.toggle("bg-white", window.scrollY > 0);


  menu.classList.toggle("shadow-md", !window.scrollY > 0);
  menu.classList.toggle("bg-white/30", !window.scrollY > 0);
  menu.classList.toggle("backdrop-blur-md", !window.scrollY > 0);
  menu.classList.toggle("bg-white", window.scrollY > 0);

  aLinks.forEach((link) => {
    link.classList.toggle("text-[#020307]", window.scrollY > 0);
    link.classList.toggle("text-red-600", !window.scrollY > 0);
  });
  logo.classList.toggle("text-black", window.scrollY > 0);
  logo.classList.toggle("text-[#fff]", !window.scrollY > 0);
  menuIcon.classList.toggle("text-black", window.scrollY > 0);
  menuIcon.classList.toggle("text-[#fff]", !window.scrollY > 0);
  menu_mob.forEach((link) => {
    link.classList.toggle("text-black", window.scrollY > 0);
    link.classList.toggle("text-[#fff]", !window.scrollY > 0);
  });
});


btn_menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  btn_menu.classList.toggle("active");
  
}
);