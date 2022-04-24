document.addEventListener('DOMContentLoaded', () => {

  const firstViewAnimation = () => {
    const firstViewElement = document.getElementById('js-first-view');
    firstViewElement.classList.add('is-inview');
  };
  firstViewAnimation();

  //デバイス幅360px以下はリサイズして表示
  !(function () {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
      const value =
        window.outerWidth > 360
          ? 'width=device-width,initial-scale=1'
          : 'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();
});


