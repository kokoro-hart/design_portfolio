//マウスストーカー
function mouseStalker() {
  const stalker = document.getElementById('js-stalker');

  //userAgent判定
  if (!(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
    //pcの場合
    let hovFlag = false;
    document.addEventListener('mousemove', (e) => {
      if (!hovFlag) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      }
    });
    const linkElem = document.querySelectorAll('a:not(.no_stick_)');
    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        stalker.classList.add('is-hover');

        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
      });
      //マウスホバー解除時
      linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is-hover');
      });
    }

  } else {
    //スマホorタブレットの場合
    stalker.style.visibility = 'hidden';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  mouseStalker();
});