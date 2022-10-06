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

/**
 * sp,tab時上下スクロール判定にてheaderの表示 / 非表示切り替え
 */
export function scrollHide() {
  const mediaQueryList = window.matchMedia('(min-width: 1025px)');
  let scrollPoint = 0; 
  let lastPoint = 100; 

  /**
 * イベントリスナー
 */
  const listener = (event) => {
    if (!event.matches) {
      // 1024px以下の処理
      addEventListener("scroll", function () {

        scrollPoint = window.scrollY;

        if (scrollPoint >= lastPoint && scrollPoint > 100) {
          // 下スクロールの場合
          header.style.transform = 'translate(-50%, -90%)';
        } else {
          // 上スクロールの場合
          header.style.transform = 'translate(-50%, 0px)';
        }

        lastPoint = scrollPoint;
      });
    }
  };

  // リスナー登録
  mediaQueryList.addEventListener("change", listener);

  // 初期化処理
  listener(mediaQueryList);
}
