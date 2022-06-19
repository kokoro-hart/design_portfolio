/**
 * id="js-first-view"に.is-inviewクラスを付与
 */
export default () => {
  const firstViewElement = document.getElementById('js-first-view');
  firstViewElement.classList.add('is-inview');
};