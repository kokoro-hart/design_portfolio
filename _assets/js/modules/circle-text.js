
if (document.getElementById('js-circle-text') !== null) {
  //くるくる回るサークルテキスト
  let Emblem = {
    init: function (el, str) {
      let element = document.querySelector(el);
      let text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let span = document.createElement('span');
        let node = document.createTextNode(letter);
        let r = (360 / text.length) * (i);
        let x = (Math.PI / text.length).toFixed(0) * (i);
        let y = (Math.PI / text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
        span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
        element.appendChild(span);
      }
    }
  };
  Emblem.init('#js-circle-text');
}

