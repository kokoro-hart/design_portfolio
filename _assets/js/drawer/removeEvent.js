import { drawerButton, drawerNav, body } from "./variables";
/**
 * ドロワーの初期化処理
 */
export default () => {
  drawerButton.setAttribute('aria-expanded', 'false');
  drawerNav.setAttribute('area-hidden', 'true');
  body.classList.remove('is-drawer-active')
}