/**
 * お問い合わせ完了時thanksページへ遷移させる
 */
export default () => {
  let submitted = false;
  document.getElementById('js-form').onsubmit = function () {
    submitted = true;
  }

  document.getElementById('hidden_iframe').onload = function () {
    if (submitted) { window.location = '/contact-thanks/'; }
  }
}