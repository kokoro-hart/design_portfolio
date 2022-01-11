
//ドロワー
const body = document.body;
const headerLogo = document.getElementById('js-header-logo');
const drawerButton = document.getElementById('js-drawer-button');
const drawerNav = document.getElementById('js-drawer-nav');

drawerButton.addEventListener('click', function () {
  body.classList.toggle('is-drawer-active')
  if (this.getAttribute('aria-expanded') == 'false') {
    this.setAttribute('aria-expanded', 'true');
    drawerNav.setAttribute('area-hidden', 'false');
  } else {
    this.setAttribute('aria-expanded', 'false');
    drawerNav.setAttribute('area-hidden', 'true');
  };
});
