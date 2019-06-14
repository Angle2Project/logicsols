let appInit = function(){
  //Init App        
  setTimeout(function(){
    $('.loader').hide();
    $(document).scrollTop(0);
    $('body').removeClass('noscroll');
    if($('body').hasClass('login') || $('body').hasClass('register')){
      $('body').removeClass('init');
    }else{
      new WOW().init();
      let tl = new TimelineLite({onComplete: function(){
        //$('body').removeClass('init');
      }});
      tl.fromTo('.hero__bg .bg-1', 1, {opacity: 0}, {visibility: 'visible', opacity: 1})
      .fromTo('.hero__bg .bg-2', 1.2, {opacity: 0}, {visibility: 'visible', opacity: 1}, '-=0.3')
      .fromTo('.hero__bg .bg-comp', 1.2, {opacity: 0}, {visibility: 'visible', opacity: 1}, '-=1.2')
      .fromTo('.hero__bg .track', 1, {opacity: 0, x: 100, y: -60}, {visibility: 'visible', opacity: 1, y: 0, x: 0}, '-=0.5')
      .fromTo('.hero__bg .barge', 1, {opacity: 0, x: 100, y: -60}, {visibility: 'visible', opacity: 1, y: 0, x: 0}, '-=0.7')
      .fromTo('.hero__bg .airplane', 1, {opacity: 0, x: -150, y: -70}, {visibility: 'visible', opacity: 1, y: 0, x: 0},'-=0.7')
      .fromTo('.hero__body h1', 0.6, {opacity: 0, y: 40}, {visibility: 'visible', opacity: 1, y: 0},'-=0.5')
      .fromTo('.hero__body .hero__description', 0.6, {opacity: 0, y: 40}, {visibility: 'visible', opacity: 1, y: 0, onComplete: function(){        
        $('body').removeClass('init');
      }},'-=0.5')
      .fromTo('.hero__body .btn', 1, {opacity: 0}, {visibility: 'visible', opacity: 1},'-=0.2');
    }    
  }, 200);
  
  
  $('[data-action="toggle-menu"]').click(function(e){
    $('body').toggleClass('menu');
  });


  $('.form-control input').each(function(i, el){
    let val = $(el).val();
    if($.trim(val).length){
      $(this).closest('.form-control').addClass('fill');
    }else{
      $(this).closest('.form-control').removeClass('fill');
    }
  });
  $('.form-control input').keyup(function(e){
    let val = $(this).val();
    if($.trim(val).length){
      $(this).closest('.form-control').addClass('fill');
    }else{
      $(this).closest('.form-control').removeClass('fill');
    }
  });

  $('header a[data-target], footer a[data-target]').click(function(e){
    let t = $(this).attr('data-target');
    let a = t == 'top' ? 0 : $('article[data-anchor="'+t+'"]').offset().top - 94;
    var body = $("html, body");
    body.stop().animate({scrollTop:a}, 800, 'swing', function() { 
      //alert("Finished animating");
    });
    e.preventDefault();
  });
  $('.mobile-menu a[data-target]').click(function(e){
    $('body').removeClass('menu');
    let t = $(this).attr('data-target');
    let a = t == 'top' ? 0 : $('article[data-anchor="'+t+'"]').offset().top - 94;
    var body = $("html, body");
    body.stop().animate({scrollTop:a}, 800, 'swing', function() { 
      //alert("Finished animating");
    });
    e.preventDefault();
  });
  

  $('[data-action="modal-register"]').click(function(e){
    if($('body').hasClass('menu'))$('body').removeClass('menu');
    $('.modal.register-select').fadeIn(200);
    e.preventDefault();
  });
  $('.modal .modal__close').click(function(e){
    $('.modal.register-select').fadeOut(200);
  });
  $('.modal').click(function(e){
    if($(e.target).closest('.modal__wrapper').length)return;
    if($(this).hasClass('video'))$(this).find('.modal__wrapper').html('');
    $('.modal').fadeOut(200);
  });
  $('[data-action="modal-video"]').click(function(e){
    let iframe = '<iframe src="https://player.vimeo.com/video/322234222?autoplay=1&loop=0&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
    if($('body').hasClass('menu'))$('body').removeClass('menu');    
    $('.modal.video').fadeIn(200).find('.modal__wrapper').html(iframe);
    e.preventDefault();
  });

  if($('.swiper-container').length){
    var swiper = new Swiper('.swiper-container', {
      speed: 300,
      touchRatio: 0,
      navigation: {
        nextEl: '.slider__navigation .next',
        prevEl: '.slider__navigation .prev',
      },
      pagination: {
        el: '.slider__pagination',
        type: 'fraction',
      }
    });
  }
  
};


if($('#phone-mask').length){
  var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '(000)000-00-00'
    }
  );  
}



// Initial state
var scrollPos = 0;
// adding scroll event
$(document).scroll(function(e){
  if($('body').hasClass('login') || $('body').hasClass('register'))return
  if($(document).scrollTop() > 0){
    $('header').addClass('scroll');
  }else{
    $('header').removeClass('scroll');
  }    
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    if($(document).scrollTop() > 200){
      $('header').css('transform', 'translateY(0%)');
    }    
  }else{
    if($(document).scrollTop() > 200){
      $('header').css('transform', 'translateY(-100%)');
    }        
  } 
  // saves the new position for iteration.    
  scrollPos = (document.body.getBoundingClientRect()).top; 
    
});


window.onload = function(){  
  appInit();
};