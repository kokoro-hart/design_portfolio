export class ScrollObserver {
  /**
   * @param {string} elements 対象の要素
   * @param {Object} options デフォルトのオプションに対して上書きする場合
   * @callback コールバック関数
   */
  constructor(elements, callback, options) {
    this.elements = document.querySelectorAll(elements);
    // デフォルトオプション
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