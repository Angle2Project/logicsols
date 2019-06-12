/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    $('.modal').fadeOut(200);
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

// Initial state
var scrollPos = 0;
// adding scroll event
$(document).scroll(function(e){  
  if($(document).scrollTop() > 0){
    $('header').addClass('scroll');
  }else{
    $('header').removeClass('scroll');
  }
  if ((document.body.getBoundingClientRect()).top > scrollPos)
  $('header').css('transform', 'translateY(0%)');
	else
    $('header').css('transform', 'translateY(-100%)');
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});


window.onload = function(){  
  appInit();
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map