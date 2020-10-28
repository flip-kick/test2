window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
      document.querySelector('#burger__menu').classList.toggle('is-active');
  });
});



// Swiper

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



// Accordion

$( function() {
    $('#accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
} );


// Scroll

var page = $('html, body');
$('a[href*="#about"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $('.burger__menu').removeClass('is-active');
    return false;
});

var page = $('html, body');
$('a[href*="#offer"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $('.burger__menu').removeClass('is-active');
    return false;
});

var page = $('html, body');
$('a[href*="#stages"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $('.burger__menu').removeClass('is-active');
    return false;
});

var page = $('html, body');
$('a[href*="#info"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $('.burger__menu').removeClass('is-active');
    return false;
});

var page = $('html, body');
$('a[href*="#footer"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $('.burger__menu').removeClass('is-active');
    return false;
});