/**
 * 行ごとにスライドアップアニメーション、入れ子なし、brタグ使用可能
 */
export default () => {
  const slideUpRowTexts = document.querySelectorAll('.js-slide-up-row');
  if (slideUpRowTexts.length > 0) {

    // アニメーション関数
    const textSlideUpAutoAnime = (target) => {
      const texts = target.querySelectorAll('.js-slide-up-row__text');
      texts.forEach((text, index) => {
        text.animate(
          {
            transform: 'translateY(0)',
          },
          {
            fill: 'forwards', //アニメーション後に値を維持する
            duration: 1600, //アニメーション時間
            easing: 'cubic-bezier(.23, 1, .32, 1)', //イージング
            delay: index * 100 //行ごとの遅延時間
          }
        );
      });
    }

    slideUpRowTexts.isFinished = false;

    const animation = () => {
      slideUpRowTexts.forEach(el => {
        textSlideUpAutoAnime(el)
        el.isFinished = true;
      });
    }

    const setUpText = (slideUpRowText, baseText) => {
      //表示領域確保用の透明テキスト
      let html = '<span class="js-slide-up-row__base" aria-hidden="true">' + baseText + '</span><span class="u-visually-hidden">' + baseText + '</span>';

      //表示領域全体の高さを取得
      const textHeight = slideUpRowText.clientHeight;

      //1行の高さを取得
      const styles = getComputedStyle(slideUpRowText);
      let lineHeight = styles.lineHeight;
      if (lineHeight === 'normal') {
        //line-heightが未設定だった場合は1行の高さをチェックする
        slideUpRowText.insertAdjacentHTML('beforeend', '<span class="js-slide-up-row__checker" aria-hidden="true">　</span>');
        lineHeight = slideUpRowText.querySelector('.js-slide-up-row__checker').clientHeight;
      } else {
        lineHeight = parseFloat(lineHeight);
      }

      //現在何行なのか調べる
      const row = textHeight / lineHeight;

      //アニメーション用 位置変更設定
      let translateY = textHeight;
      //アニメーションが終了していたら位置変更しない
      if (slideUpRowText.isFinished) {
        translateY = 0;
      }
      //行ごとにclip-pathを設定する
      for (let i = 0; i < row; i++) {
        const insetTop = lineHeight * i;
        let insetBottom = textHeight - (lineHeight * (i + 1));
        if (insetBottom < 0) {
          insetBottom = 0;
        }
        html += '<span class="js-slide-up-row__line" aria-hidden="true" style="clip-path: inset(' + insetTop + 'px 0 ' + insetBottom + 'px)"><span class="js-slide-up-row__text" style="clip-path: inset(' + insetTop + 'px 0 ' + insetBottom + 'px);transform: translateY(' + translateY + 'px)">' + baseText + '</span></span>';
      }

      //中身をリセット
      slideUpRowText.textContent = '';
      //定義したHTMLを反映
      slideUpRowText.insertAdjacentHTML('beforeend', html);
      //セットアップ完了classの追加
      slideUpRowText.classList.add('is-setup');
    }

    //初回セットアップ
    slideUpRowTexts.forEach(slideUpRowText => {
      //ベーステキストの取得
      const baseText = slideUpRowText.innerHTML;

      //アニメーション用マークアップ
      setUpText(slideUpRowText, baseText);

      //observer初回監視開始
      // observer.observe(slideUpRowText);

      /*
        レスポンシブ対応
      */
      //表示エリアリサイズ監視 ResizeObserver
      const resizeObserver = new ResizeObserver(() => {
        //アニメーション用マークアップ再定義
        setUpText(slideUpRowText, baseText);
      });
      //リサイズ監視開始
      resizeObserver.observe(slideUpRowText, slideUpRowText);
    });



    setTimeout(() => {
      animation();
    }, 400)
  }
}