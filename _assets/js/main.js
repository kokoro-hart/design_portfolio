/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

// ライブラリ
import barba from '@modules/@barba/core';
import LocomotiveScroll from '@modules/locomotive-scroll/dist/locomotive-scroll.js';

// common
import resizeEvent from './common/resizeEvent';
import firstViewAnimation from './common/firstViewTrigger';
import lazyVideo from './common/lazyVideo';
import replaceHead from './common/replaceHead';
import agentEvent from './common/agentEvent';

// intersectionObserver
import addClassIntersection from './intersectionObserver/addClassIntersection';
import toggleChangeBg from './intersectionObserver/toggleChangeBg';
import followContents from './intersectionObserver/followContents';

// ドロワーのイベント
import toggleEvent from './drawer/toggleEvent';
import removeEvent from './drawer/removeEvent';

// LocomotiveScroll options
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1,
  getSpeed: true,
  getDirection: true
});

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  resizeEvent();
  toggleEvent();
  lazyVideo();
  agentEvent();
});
firstViewAnimation();


const header = document.getElementById('js-header');
// barba.js options
barba.init({
  views: [
    {
      namespace: 'single',
      afterEnter(data) {
        toggleChangeBg(data.next.container.id);
        lazyVideo();
        header.classList.add('is-blend-normal');
      }
    },
    {
      namespace: 'memories',
      beforeEnter(data) {
        lazyVideo();
        if (header.classList.contains('is-blend-normal')) {
          header.classList.remove('is-blend-normal');
        }
      }
    },
    {
      namespace: 'home',
      afterEnter(data) {
        followContents();
        if (header.classList.contains('is-blend-normal')) {
          header.classList.remove('is-blend-normal');
        }
        agentEvent();
      }
    },
    {
      namespace: 'about',
      afterEnter(data) {
        addClassIntersection();
        if (header.classList.contains('is-blend-normal')) {
          header.classList.remove('is-blend-normal');
        }
      }
    },
    {
      namespace: 'contact',
      afterEnter(data) {
        if (header.classList.contains('is-blend-normal')) {
          header.classList.remove('is-blend-normal');
        }
      }
    },
  ]
});

barba.hooks.beforeLeave((data) => {
  scroll.destroy();
});

barba.hooks.beforeEnter((data) => {
  replaceHead(data);
  removeDrawerContent();
})

barba.hooks.after((data) => {
  scroll.init();
  window.scrollTo(0, 0);
  firstViewAnimation();
  removeEvent();
});