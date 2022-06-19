/**
 * safariでのfilterの表示崩れを修正する関数
 */
export default () => {
  const agent = window.navigator.userAgent.toLowerCase();
  if (agent.indexOf('safari') !== -1 && agent.indexOf('chrome') === -1) {
    console.log('safariです');
    const imgs = document.querySelectorAll('.p-works-item__img');
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.transform = 'translateZ(0)';
    }
  }
}