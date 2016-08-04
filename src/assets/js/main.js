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

   $(this).on('click', function(event){
      if(event.target.className !== 'c-language__select') {
         $('.c-language').removeClass('is-open');
      }
   });

});
