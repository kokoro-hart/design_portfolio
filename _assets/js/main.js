/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

//SVGスプライトをIEで使用するためのライブラリ
import '@modules/svgxuse';

//画像遅延読み込み
import './lib/lazysizes'
//慣性スクロール
import './lib/locomotive-scroll'

import './common'

import './modules/drawer'
import './modules/intersection-observer'
import './modules/stalker'