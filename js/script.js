//const navbar = document.querySelector('.banner');
//const toggle = document.querySelector('.toggle-open-btn');
//const closeNav = document.querySelector('.close-navbar');
//
//toggle.addEventListener('click', () => {
//    if(banner.classList.contains('banner-active')) {
//        return;
//    } else {
//        banner.classList.add('banner-active');
//    }
//});
//closeNav.addEventListener('click', () => {
//    banner.classList.remove('banner-active');
//});
//
//window.addEventListener('scroll', () => {
//    if(window.pageYOffset > 0) {
//        banner.classList.remove('banner-active');
//    }
//});


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:false,   
    smartSpeed: 1000, 
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".home-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
