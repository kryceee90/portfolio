$(document).ready(function(){

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     $("header").css({
    //       transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
    //     });
    //   });

    //   -------------------------------------------------------
    $(window).scroll(function(){
        if ($(window).scrollTop() >= -100) {
            $('header').addClass('fixed-header');
            // $('.navigation li').addClass('visible-title');
        }
        else {
            $('header').removeClass('fixed-header');
            // $('.navigation li').removeClass('visible-title');
        }
    });

// TOP
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// visual
var $visual = $('.visual');
$visual.each(function(){
    var $container = $(this);
    var $slideGroup = $container.find('.visual-group');

    $slideGroup.slick({
      arrows : false,
      infinite : true,
      autoplay : true,
      autoplaySpeed : 3000,
      speed : 1000,
      fade : true,
      cssEase : 'linear',
      puaseOnHover : false,
      puaserOnFocus : false,
    });
  }); 
  

// pag fade in
  $('body').css('display', 'none');

  $('body').fadeIn(1000);
  
  
  
  $('.navigation>li>a').click(function(event) {
  
  event.preventDefault();
  
  newLocation = this.href;
  
  $('body').fadeOut(500, newpage);
  
  });
  
  
  
  function newpage() {
  
  window.location = newLocation;
  
  }
  

})