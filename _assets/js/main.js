/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

//SVGスプライトをIEで使用するためのライブラリ
import '@modules/svgxuse';
//ブラウザ判定のためライブラリ
import './lib/b_browser_switcher.js';


import './common'