

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
          cover      : true,
          heightRatio: 0.5,
    } ).mount();
  } );

  
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    // console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
// Clock for every Year
const clock = document.getElementById('clock');

let CurrentDataTime = new Date();

clock.innerHTML = CurrentDataTime.getFullYear();


