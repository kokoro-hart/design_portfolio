import { ScrollObserver } from "./scrollObserver";

/**
 * 交差対象のDOMに紐づいたdata属性を選択し.is-showクラスを付与。それ以外は.is-showクラスを削除する関数
 */
export default () => {
  const _init = (elements, isIntersecting) => {
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
  const scrollObserver = new ScrollObserver('.js-follow-targets', _init);
}