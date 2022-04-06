
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
const switchingTrigger = document.getElementById('js-switching-trigger');
const header = document.getElementById('js-header');
const switchingArea = document.getElementById('js-switching-area'); 

const switchingObserver = new IntersectionObserver(switchingBg, {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0
});

if (switchingTrigger !== null) {
  switchingObserver.observe(switchingTrigger);
}

function switchingBg(entries) {
  for (const e of entries) {
    if (e.isIntersecting) {
      switchingArea.classList.add('is-active');
      header.classList.add('is-color-base');
    } else {
      switchingArea.classList.remove('is-active');
    }
  }
};


//制作実績
const fullScreenImg = document.querySelectorAll('.js-mock-up');

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

//コンテンツを固定する関数
function activateIndex(element) {

  //既にshowされているコンテンツ以外は.is-showクラスを削除
  const currentActiveIndex = document.querySelector('.is-show');

  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove('is-show');
  }

  //引数で渡されたDOMが紐づいたdata属性を選択し.is-showクラスを付与
  const newActiveIndex = document.querySelector(`[data-id='#${element.id}']`);
  newActiveIndex.classList.add('is-show');
}

//固定を解除する関数
function removeIndex(element) {
  const newRemoveIndex = document.querySelector(`[data-id='#${element.id}']`);
  newRemoveIndex.classList.remove('is-show');
}