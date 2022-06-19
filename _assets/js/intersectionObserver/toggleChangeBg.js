import { ScrollObserver } from "./scrollObserver";

/**
 * 交差対象が交差するたびに引数で渡されたid属性を持つ要素ののbackground, colorを変更する関数
 * @param {string} container id属性値
 */
export default (container) => {
  const changeBgElement = document.getElementById(`${container}`);
  let primaryColor = changeBgElement.dataset.bg;
  const borders = document.querySelectorAll('.p-works-overview__heading');
  const _init = (elements, isIntersecting) => {
    if (isIntersecting) {
      changeBgElement.style.backgroundColor = `${primaryColor}`;
      changeBgElement.style.color = '#fff';
      borders.forEach(border => {
        border.style.borderColor = '#fff';
      });
    } else {
      if (changeBgElement !== null) {
        changeBgElement.style.backgroundColor = '#fff';
        changeBgElement.style.color = `${primaryColor}`;
        borders.forEach(border => {
          border.style.borderColor = `${primaryColor}`;
        });
      }
    }
  }
  const scrollObserver = new ScrollObserver('#js-switching-trigger', _init);
}