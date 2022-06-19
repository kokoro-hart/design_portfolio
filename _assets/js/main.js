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
import { initLoading, endLoading } from './common/loading';
import { addBlendHeader, removeBlendHeader } from './common/header';

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

window.onload = endLoading();

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  resizeEvent();
  toggleEvent();
  lazyVideo();
  agentEvent();
});
firstViewAnimation();

// barba.js options
barba.init({
  views: [
    {
      namespace: 'single',
      afterEnter(data) {
        toggleChangeBg(data.next.container.id);
        lazyVideo();
        removeBlendHeader();
      }
    },
    {
      namespace: 'memories',
      beforeEnter(data) {
        lazyVideo();
        addBlendHeader();
      }
    },
    {
      namespace: 'home',
      afterEnter(data) {
        followContents();
        addBlendHeader();
        agentEvent();
      }
    },
    {
      namespace: 'about',
      afterEnter(data) {
        addClassIntersection();
        addBlendHeader();
      }
    },
    {
      namespace: 'contact',
      afterEnter(data) {
        addBlendHeader();
      }
    },
  ]
});

barba.hooks.before((data) => {
  initLoading();
});

barba.hooks.beforeLeave((data) => {
  scroll.destroy();
});

barba.hooks.beforeEnter((data) => {
  replaceHead(data);
  removeEvent();
})

barba.hooks.after((data) => {
  scroll.init();
  window.scrollTo(0, 0);
  firstViewAnimation();
  endLoading();
});