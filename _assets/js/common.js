import LocomotiveScroll from '@modules/locomotive-scroll/dist/locomotive-scroll.js';
//LocomotiveScroll options
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1,
  getSpeed: true,
  getDirection: true
});

// resizeEvent function
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// scrollEvent Class
class ScrollObserver {
  constructor(elements, callback, options) {
    this.elements = document.querySelectorAll(elements);
    const defaultOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };
    this.callback = callback;
    this.options = Object.assign(defaultOptions, options);//デフォルトオプションと指定したオプションをマージする
    this._init();
  }

  //初期化処理
  _init() {
    const initCallbackFunction = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.callback(entry.target, true);
        } else {
          this.callback(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(initCallbackFunction.bind(this), this.options);
    this.elements.forEach(element => this.io.observe(element));
  }
}

// firstView callback
function firstViewAnimation() {
  const firstViewElement = document.getElementById('js-first-view');
  firstViewElement.classList.add('is-inview');
};
firstViewAnimation();



// scrollEvent function - addIntoViewClass
function initAddIntoViewClass() {
  //引数で渡されたDOMがが画面内に入ったら.is-inviewを付与する関数
  const addIntoViewClass = (elements, isIntersecting) => {
    if (isIntersecting) {
      elements.classList.add('is-inview');
    }
  }
  const scrollObserver01 = new ScrollObserver('.js-trigger', addIntoViewClass, {
    root: null,
    rootMargin: '-40% 0px',
    threshold: 0
  });
}
initAddIntoViewClass();

// scrollEvent function - toggleIntoViewClass
function initToggleIntoViewClass() {
  //引数で渡されたDOMがが画面内にある時のみchangeBgElementに.is-activeを付与する関数
  const toggleIntoViewClass = (elements, isIntersecting) => {
    const changeBgElement = document.getElementById('js-switching-bg');
    if (isIntersecting) {
      changeBgElement.classList.add('is-active');
    } else {
      if (changeBgElement !== null) {
        changeBgElement.classList.remove('is-active');
      }
    }
  }
  const scrollObserver02 = new ScrollObserver('#js-switching-trigger', toggleIntoViewClass);
}

// scrollEvent function - followContents
function initFollowContents() {
  //引数で渡されたDOMが画面内にある時のみ、DOMが紐づいたdata属性を選択し.is-showクラスを付与。それ以外は.is-showクラスを削除する関数
  const followContents = (elements, isIntersecting) => {
    if (isIntersecting) {

      //既にshowされているコンテンツ以外は.is-showクラスを削除
      const currentActiveIndex = document.querySelector('.is-show');
      if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove('is-show');
      }

      //引数で渡されたDOMが紐づいたdata属性を選択し.is-showクラスを付与
      const newActiveIndex = document.querySelector(`[data-id='#${elements.id}']`);
      newActiveIndex.classList.add('is-show');

    } else {
      const newRemoveIndex = document.querySelector(`[data-id='#${elements.id}']`);
      if (newRemoveIndex !== null) {
        newRemoveIndex.classList.remove('is-show');
      }
    }
  }
  const scrollObserver03 = new ScrollObserver('.js-follow-targets', followContents);
}

// drawerEvent function 
function initDrawerEvent() {
  const body = document.body;
  const drawerButton = document.getElementById('js-drawer-button');
  const drawerNav = document.getElementById('js-drawer-nav');
  function clickDrawerEvent() {
    drawerButton.addEventListener('click', function () {
      if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        drawerNav.setAttribute('area-hidden', 'false');
        body.classList.add('is-drawer-active')
      } else {
        this.setAttribute('aria-expanded', 'false');
        drawerNav.setAttribute('area-hidden', 'true');
        body.classList.remove('is-drawer-active')
      };
    });
  }
  clickDrawerEvent();

  function removeDrawerContent() {
    drawerButton.setAttribute('aria-expanded', 'false');
    drawerNav.setAttribute('area-hidden', 'true');
    body.classList.remove('is-drawer-active')
  }
  barba.hooks.after((data) => {
    removeDrawerContent();
  });
}
initDrawerEvent();

const replaceHead = function (data) {
  const head = document.head;
  const newPageRawHead = data.next.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
  const newPageHead = document.createElement('head');
  newPageHead.innerHTML = newPageRawHead;

  const removeHeadTags = [
    "meta[name='keywords']"
    , "meta[name='description']"
    , "meta[property^='og']"
    , "meta[name^='twitter']"
    , "meta[itemprop]"
    , "link[itemprop]"
    , "link[rel='prev']"
    , "link[rel='next']"
    , "link[rel='canonical']"
  ].join(',');

  const headTags = head.querySelectorAll(removeHeadTags)

  for (let i = 0; i < headTags.length; i++) {
    head.removeChild(headTags[i]);
  }

  const newHeadTags = newPageHead.querySelectorAll(removeHeadTags)

  for (let i = 0; i < newHeadTags.length; i++) {
    head.appendChild(newHeadTags[i]);
  }
}

const header = document.getElementById('js-header');
barba.init({
  views: [
    {
      namespace: 'single',
      beforeEnter(data) {
        initToggleIntoViewClass();
        header.classList.add('is-color-base');
      }
    },
    {
      namespace: 'home',
      afterEnter(data) {
        initFollowContents();
        header.classList.remove('is-color-base');
      }
    },
    {
      namespace: 'about',
      afterEnter(data) {
        header.classList.remove('is-color-base');
      }
    },
    {
      namespace: 'contact',
      afterEnter(data) {
        header.classList.remove('is-color-base');
      }
    },
  ]
});

barba.hooks.beforeLeave((data) => {
  scroll.destroy();
});

barba.hooks.beforeEnter((data) => {
  replaceHead(data);
  initAddIntoViewClass();
  removeDrawerContent();
})

barba.hooks.after((data) => {
  scroll.init();
  firstViewAnimation();
});