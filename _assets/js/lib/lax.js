
window.onload = function () {
  //lax.jsを初期化
  lax.init()

  // ドライバーを追加する
  lax.addDriver('scrollY', function () {
    return window.scrollY;
  });

  //手紙オブジェクト

  //JavaScript
  lax.addElements('.js-letter01', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/-4', 'screenHeight/-4'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }

  });

  //WordPress
  lax.addElements('.js-letter02', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/-8', 'screenHeight/-8'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }

  });

  //HTML CSS
  lax.addElements('.js-letter03', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/-6', 'screenHeight/-6'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }

  });

  //羽ペン
  lax.addElements('.js-pen', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/-3', 'screenHeight/-3'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }

  });

  //タイポグラフィ
  lax.addElements('.js-typography', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/3', 'screenHeight/3'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }
  });

  //タイポグラフィ
  lax.addElements('.js-fv-text', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/6', 'screenHeight/5'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }
  });
  

  //フッター
  lax.addElements('.js-footer', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY'],
        ['-screenHeight/2', 'screenHeight/2'],
        {
          easing: 'easeInOutSine',
        }
      ],
    }

  });
}