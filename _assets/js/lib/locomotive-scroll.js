import LocomotiveScroll from '@modules/locomotive-scroll/dist/locomotive-scroll.js';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1,
});