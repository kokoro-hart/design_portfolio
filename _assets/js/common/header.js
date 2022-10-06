const header = document.getElementById('js-header');

/**
 * headerから.is-blend-normalを削除（乗算ありにする）
 */
export function addBlendHeader() {
  if (header.classList.contains('is-blend-normal')) {
    header.classList.remove('is-blend-normal');
  }
}

/**
 * headerに.is-blend-normalを付与（乗算なしにする）
 */
export function removeBlendHeader() {
  header.classList.add('is-blend-normal');
}

/**
 * headerのborderをアニメーション発火
 */
export function pageTransitionHeader() {
  header.classList.add('is-slide-border');

  setTimeout(() => {
    header.classList.remove('is-slide-border');
  }, 1000)
}