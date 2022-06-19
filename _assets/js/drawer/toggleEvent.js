import { drawerButton, drawerNav, body } from "./variables";
/**
 * ドロワーのクリックイベント
 */
export default () => {
  drawerButton.addEventListener('click', function () {
    if (this.getAttribute('aria-expanded') == 'false') {
      this.setAttribute('aria-expanded', 'true');
      drawerNav.setAttribute('area-hidden', 'false');
      body.classList.add('is-drawer-active')
    } else {
      this.setAttribute('aria-expanded', 'false');
      drawerNav.setAttribute('area-hidden', 'true');
      body.classList.remove('is-drawer-active')
    };
  });
}