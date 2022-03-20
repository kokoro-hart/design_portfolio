/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

//SVGスプライトをIEで使用するためのライブラリ
import '@modules/svgxuse';

//画像遅延読み込みライブラリ
import './lib/lazysizes'
import './lib/locomotive-scroll'

import './common'

import './modules/drawer'
import './modules/intersection-observer'
import './modules/circle-text'
import './modules/stalker'

