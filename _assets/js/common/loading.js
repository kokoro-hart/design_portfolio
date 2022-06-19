const links = document.querySelectorAll('a');
/**
 * ローディング開始
 */
export function initLoading() {
  document.body.style.cursor = 'wait';
  links.forEach(link => {
    link.addEventListener('click', function () {
      link.style.cursor = 'wait';
    });
  });
}
/**
 * ローディング終了
 */
export function endLoading() {
  document.body.style.cursor = 'auto';
  links.forEach(link => {
    link.addEventListener('click', function () {
      link.style.cursor = 'pointer';
    });
  });
}