import { ScrollObserver } from "./scrollObserver";

/**
 * 引数で渡されたDOMがが画面内に入ったら.is-inviewを付与する関数
 */
export default () => {
  const _init = (elements, isIntersecting) => {
    if (isIntersecting) {
      elements.classList.add('is-inview');
    }
  }
  const scrollObserver = new ScrollObserver('.js-trigger', _init, {
    root: null,
    rootMargin: '-40% 0px',
    threshold: 0
  });
}