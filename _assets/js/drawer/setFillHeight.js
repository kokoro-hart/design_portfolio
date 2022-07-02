/**
 * 画面サイズの更新があった場合ドロワーの高さ調整
 */
export default () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}