
//要素感知
const elementsTrigger = document.querySelectorAll('.js-trigger');
const elementsScrollObserver = new IntersectionObserver(targetsElements, {
  root: null,
  rootMargin: '-40% 0px',
  threshold: 0
});

Array.from(elementsTrigger).forEach(target => {
  elementsScrollObserver.observe(target);
});

function targetsElements(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
    }
  });
};

//背景色切り替え
const switchingTrigger = document.getElementById('js-switching-bg'); 
const switchingArea = document.getElementById('js-switching-area'); 
const keyVisual = document.getElementById('js-key-visual');

const switchingObserver = new IntersectionObserver(switchingBg, {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0
});

if (switchingTrigger !== null) {
  switchingObserver.observe(switchingTrigger);
}

//キービジュアルを透過する関数
function removeKeyVisual() {
  if (keyVisual !== null) {
    keyVisual.style.opacity = 0;
  }
}

//キービジュアルを出現させる関数
function activateKeyVisual() {
  if (keyVisual !== null) {
    keyVisual.style.opacity = 1;
  }
}

function switchingBg(entries) {
  for (const e of entries) {
    if (e.isIntersecting) {
      switchingArea.style.backgroundColor = '#ccc';
      switchingArea.style.color = '#111';
      removeKeyVisual();
    } else {
      switchingArea.style.backgroundColor = '#111';
      switchingArea.style.color = '#ccc';
      activateKeyVisual()
    }
  }
};


//制作実績全画面キャプチャ 右側コンテンツ追従
const fullScreenImg = document.querySelectorAll('.js-screen-img');

const options = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0
};
const observer = new IntersectionObserver(followContents, options);
fullScreenImg.forEach(img => {
  observer.observe(img);
});

function followContents(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    } else {
      removeIndex(entry.target);
    }
  });
}

//コンテンツを右側に固定する関数
function activateIndex(element) {

  //既にfixedされているコンテンツ以外は.is-fixedクラスを削除
  const currentActiveIndex = document.querySelector('.is-fixed');

  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove('is-fixed');
  }

  //引数で渡されたDOMが紐づいたdata属性を選択し.is-fixedクラスを付与
  const newActiveIndex = document.querySelector(`[data-id='#${element.id}']`);
  newActiveIndex.classList.add('is-fixed');
}

//固定を解除する関数
function removeIndex(element) {
  const newRemoveIndex = document.querySelector(`[data-id='#${element.id}']`);
  newRemoveIndex.classList.remove('is-fixed');
}
