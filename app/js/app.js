import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import MicroModal from 'micromodal';
import {Swiper, Mousewheel, Pagination} from 'swiper';
Swiper.use([Mousewheel, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
  //jQuery
  $('button').click(event => {
    event.preventDefault();
  });
  $('.menu__burger').click(() => {
    $('.menu__burger').toggleClass('active');
    $('.header__nav').slideToggle(500).toggleClass('active');
  });
  // let windows = $(window).outerWidth();
  // $('html').css('width', windows + 'px');
  // $('.modal__overlay').css('width', windows + 'px');

  
  // Modal
  MicroModal.init({
    openTrigger: 'data-micromodal-open',
    closeTrigger: 'data-micromodal-close',
    disableFocus: true,
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  })


  // Swiper
    const swiperFeedback = new Swiper('.feedback__container', {
      loop: false,
      speed: 1400,
      spaceBetween: 100,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el:'.swiper-pagination',
        clickable: true,
      }
    });
})
