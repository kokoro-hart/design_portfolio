# kokorotobita-portfolio 

![firstView](https://kt-media.blog/wp-content/uploads/2022/07/mockup_portfolio.png)

## 🌐 Site URL

#### **https://k-tobita.jp/**  

## 🎁 Overview
This is a portfolio site of Shin Tobita. It was created for job hunting.

## Usage
### mode:developmentで出力
_gulpフォルダに移動後、node-modulesをインストールし以下のコマンドを実行
```
$ npm run server
```
- http://localhost:3000 でローカルサーバーが起動。
- ejs,scssのコンパイル、jsのバンドル、babelトランスパイル...etc
- 詳しくはgulpfile.js, webpack.config.jsを参照

### mode:productionで出力

```
$ npm run build
```
- distフォルダ直下に納品時ファイルを生成