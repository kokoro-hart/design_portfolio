const gulp = require('gulp');
const del = require('del');

const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : '';

// 本番環境用設定
if (env === 'production') {
  thisCssStyle = 'compressed'; // cssを圧縮

  thisCssMap = false; // css.mapを作成しない

  thisJsBundle = true; // jsをbundle
}
// テスト環境用設定
else if (env === 'development') {
  thisCssStyle = 'expanded'; // css圧縮しない

  thisCssMap = true; // css.mapを作成する

  thisJsBundle = true; // jsをbundle
}


//scss
const sass = require('gulp-dart-sass');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const postcss = require("gulp-postcss");
const autoprefixer = require('gulp-autoprefixer'); 
const mqpacker = require('css-mqpacker'); 
const browserSync = require("browser-sync");


//webpack
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

//画像圧縮
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");


//svgスプライト
const svgmin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');

//ejs
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const ejs = require("gulp-ejs");
const fs = require("fs");
const htmlbeautify = require("gulp-html-beautify");

// フォルダ
const srcBase = '../_static/src';
const assetsBase = '../_assets';
const publicBase = '../_assets/public';
const distBase = '../_static/dist';
const serverBase = '../_server/wp/wp-content/themes/dummy';

const publicPath = {
  'public':[publicBase + '/**/*', '!' + publicBase + '/**/*.gitkeep']
};

const srcPath = {
  'scss': assetsBase + '/scss/**/*.scss',
  'js': assetsBase + '/js/**/*.js',
  'img': [assetsBase + '/img/**/*', '!' + assetsBase + '/img/svg/*.svg'],
  'svg': [
    assetsBase + '/img/svg/*.svg',
  ],
  'font': assetsBase + '/font/**/*',
  'html': srcBase + '/**/*.html',
  'php': srcBase + '/**/*.php',
  'ejs': assetsBase + '/ejs/**/!(_)*.ejs',
};

const watchPath = {
  'ejs': [assetsBase + '/ejs/**/*.ejs',assetsBase + '/ejs/**/*.json']
}

const ejsData = {
  'data': assetsBase + "/ejs/data/site.json"
}

const distPath = {
  'css': distBase + '/css/',
  'js': distBase + '/js/',
  'img': distBase + '/img/',
  'svg': distBase + '/img/svg/',
  'font': distBase + '/font/',
  'html': distBase + '/',
  'php': distBase + '/',
  'ejs': distBase + '/',
};

const serverDistPath = {
  'css': serverBase + '/css/',
  'js': serverBase + '/js/',
  'img': serverBase + '/img/',
  'svg': serverBase + '/img/svg/',
  'font': serverBase + '/font/',
};

/**
 * clean
 */
const clean = () => {
  return del([distBase + '/**'], {
    force: true
  });
}

//　prefix 自動付与
const TARGET_BROWSERS = [
  'last 2 versions',
  'ie >= 11',
  'iOS >= 7',
  'Android >= 4.4'
];

/**
 * sass
 *
 */

const cssSass = () => {

  return gulp.src(srcPath.scss, {
      sourcemaps: thisCssMap
    })
    .pipe(
      plumber({
        errorHandler: notify.onError('Error:<%= error.message %>')
      }))
    .pipe(sass({
      outputStyle: thisCssStyle
    }))
    .pipe(postcss([mqpacker()])) 
    .pipe(autoprefixer(TARGET_BROWSERS))
    .pipe(gulp.dest(distPath.css, {
      sourcemaps: './'
    })) 

    .pipe(browserSync.stream())
    .pipe(notify({
      message: 'Sassをコンパイルしました！',
      onLast: true
    }));
}

/**
 * webpack
 * トランスパイルとバンドルを行う
 * 設定はwebpack.config.jsにて行う
 */
const jsBundle = () => {
  // bundleする
  if (thisJsBundle) {
    return webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest(distPath.js))
  }
  // bundleせずにコピーだけ
  else {
    return gulp.src(srcPath.js)
      .pipe(gulp.dest(distPath.js))
  }
}

/**
 * 画像圧縮
 */
const imgImagemin = () => {
  return gulp.src(srcPath.img)
    .pipe(
      imagemin(
        [
          imageminMozjpeg({
            quality: 80
          }),
          imageminPngquant(),
          imageminSvgo({
            plugins: [{
              removeViewbox: false
            }]
          })
        ], {
          verbose: true
        }
      )
    )
    .pipe(gulp.dest(distPath.img))
}

/**
 * SVGスプライト
 */
// sprite
const svg = () => {
  return gulp
    .src(srcPath.svg)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(svgmin({
      plugins: [{
          removeTitle: true
        },
        {
          removeAttrs: {
            attrs: ['fill', 'class', 'id', 'data-name', 'stroke']
          }
        },
        {
          removeStyleElement: true
        },
        {
          removeViewBox: false
        },
      ]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.min.svg'
        }
      }
    }))
    .pipe(gulp.dest(distPath.svg))
    .pipe(notify({
      message: 'SVGスプライトを生成しました！',
      onLast: true
    }));
}

/**
 * 独自fontをsrc配下に読み込む際の対応
 */
const font = () => {
  return gulp.src(srcPath.font)
    .pipe(gulp.dest(distPath.font))
}

/**
 * html
 */
const html = () => {
  return gulp.src(srcPath.html)
    .pipe(gulp.dest(distPath.html))
}

/**
 * public
 */
const public_file = () => {
  return gulp.src(publicPath.public)
    .pipe(gulp.dest(distBase))
}

/**
 * php
 */
const php = () => {
  return gulp.src(srcPath.php)
    .pipe(gulp.dest(distPath.php))
}

/**
 * ejs
 */
const ejsHTML = () => {
  const json_path = ejsData.data;
  const json = JSON.parse(fs.readFileSync(json_path));

  return gulp.src(srcPath.ejs)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error:<%= error.message %>')
      }))
    .pipe(ejs({
      jsonData: json,
    }))
    .pipe(
      htmlbeautify({
        indent_size: 2, 
        indent_char: " ", 
        max_preserve_newlines: 0, 
        preserve_newlines: true,
        indent_inner_html: false, 
        extra_liners: [], 
      })
    )
    .pipe(rename({
      extname: ".html"
    })) //拡張子をhtmlに
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
    .pipe(gulp.dest(distPath.ejs))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: 'HTMLをコンパイルしました！',
      onLast: true
    }));
}


/**
 * ローカルサーバー立ち上げ
 */
const browserSyncFunc = () => {
  browserSync.init(browserSyncOption);
}

const browserSyncOption = {
  server: distBase
}

/**
 * リロード
 */
const browserSyncReload = (done) => {
  browserSync.reload();
  done();
}

/**
 *
 * ファイル監視 ファイルの変更を検知したら、browserSyncReloadでreloadメソッドを呼び出す
 * series 順番に実行
 * watch('監視するファイル',処理)
 */
const watchFiles = () => {
  gulp.watch(srcPath.scss, gulp.series(cssSass))
  gulp.watch(srcPath.js, gulp.series(jsBundle, browserSyncReload))
  gulp.watch(srcPath.img, gulp.series(imgImagemin, browserSyncReload))
  gulp.watch(srcPath.svg, gulp.series(svg, browserSyncReload))
  gulp.watch(srcPath.font, gulp.series(font, browserSyncReload))
  gulp.watch(srcPath.html, gulp.series(html, browserSyncReload))
  gulp.watch(publicPath.public, gulp.series(public_file, browserSyncReload))
  gulp.watch(watchPath.ejs, gulp.series(ejsHTML))

}

/**
 * seriesは「順番」に実行
 * parallelは並列で実行
 */
exports.default = gulp.series(
  clean,
  gulp.parallel(cssSass, jsBundle, imgImagemin, svg, font, html, ejsHTML, public_file),
  gulp.parallel(watchFiles, browserSyncFunc)
);

exports.build = gulp.series(
  clean,
  gulp.parallel(cssSass, jsBundle, imgImagemin, svg, font, html, ejsHTML, public_file),
);