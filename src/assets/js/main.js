$(document).ready(function(){

   'use strict';

   // Carousel functionality
   $('.c-features__slider').slick({
      dots: true,
      // appendDots: $('.custom-dots'),
      infinite: false,
      speed: 350,
      cssEase: 'ease-in'
   });

   // Language switcher functionality
   $('.c-language').on('click','.c-language__select, .c-language__item', function(event){
      var $this = $(this),
          $langModule = $this.parents('.c-language');

      if(event.target.className === 'c-language__item') {
         $langModule.find('.c-language__select').html($this.text());
      }

      $langModule.toggleClass('is-open');
   });

   var toggleMenu = function() {
      $(this).find('.c-hamburger').toggleClass('is-active');
      $(this).find('.c-navigation').toggleClass('is-open');
   }.bind(this);

   var closeMenu = function() {
      $(this).find('.c-hamburger').removeClass('is-active');
      $(this).find('.c-navigation').removeClass('is-open');
   }.bind(this);

   $(this).on('click', function(event){
      if(event.target.className !== 'c-language__select') {
         $('.c-language').removeClass('is-open');
      }

      var $target = $(event.target);


      // console.log(($target.hasClass('c-navigation') || $target.hasClass('c-hamburger') || $target.parents('.c-navigation, .c-hamburger').length > 0));
      if(!($target.hasClass('c-navigation') || $target.hasClass('c-hamburger') || $target.parents('.c-navigation, .c-hamburger').length > 0)) {
         closeMenu();
      }

   });

   $('.c-hamburger').on('click', function(event){
      toggleMenu();
   });

});
