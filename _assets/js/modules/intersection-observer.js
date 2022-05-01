
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


//引数で渡されたDOMがが画面内に入ったら.is-inviewを付与する関数
const addIntoViewClass = (elements, isIntersecting) => {
  if (isIntersecting) {
    elements.classList.add('is-inview');
  }
}

//引数で渡されたDOMがが画面内にある時のみchangeBgElementに.is-activeを付与する関数
const toggleIntoViewClass = (elements, isIntersecting) => {
  const header = document.getElementById('js-header');
  header.classList.add('is-color-base');
  const changeBgElement = document.getElementById('js-switching-bg');
  if (isIntersecting) {
    changeBgElement.classList.add('is-active');
    
  } else {
    changeBgElement.classList.remove('is-active');
  }
}

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
    newRemoveIndex.classList.remove('is-show');
  }
}


const scrollObserver01 = new ScrollObserver('.js-trigger', addIntoViewClass, {
  root: null,
  rootMargin: '-40% 0px',
  threshold: 0
});
const scrollObserver02 = new ScrollObserver('#js-switching-trigger', toggleIntoViewClass);
const scrollObserver03 = new ScrollObserver('.js-follow-targets', followContents);

