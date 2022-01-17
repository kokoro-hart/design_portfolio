<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width">
  <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/common/apple-touch-icon.png">
  <meta name="description" content="トップページの説明">
  <meta property="og:title" content="cocosyu">
  <meta property="og:description" content="トップページの説明">
  <meta property="og:url" content="cocosyu.link">
  <meta property="og:type" content="website ">
  <meta property="og:local" content="ja_JP">
  <meta property="og:image" content="">
  <meta property="og:site_name" content="cocosyu.link ">

  <?php wp_head(); ?>
</head>
<body>
  <div id="wrapper">
    <span id="js-stalker" class="p-stalker"></span>
    <header id="js-header" class="l-header p-header">
      <div class="l-header__inner">
        <h1 class="p-header__logo">
          <a href="<?php echo esc_url(home_url('/')); ?>" class="p-header__logo-link">cocosyu.</a>
        </h1>
        <div class="p-header__contents u-hidden-md-down">
          <nav class="p-header__nav p-global-nav">
            <ul class="p-global-nav__list">
              <li class="p-global-nav__item">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="p-global-nav__link <?php if(is_front_page()) echo 'is-current' ?>">
                  TOP
                </a>
              </li>
              <li class="p-global-nav__item">
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="p-global-nav__link <?php check('about');?>">
                  ABOUT
                </a>
              </li>
              <li class="p-global-nav__item">
                <a href="<?php echo esc_url(home_url('/works')); ?>" class="p-global-nav__link <?php check('works');?>">
                  WORKS
                </a>
              </li>
              <li class="p-global-nav__item">
                <a href="<?php echo esc_url(home_url('/information')); ?>" class="p-global-nav__link <?php if(is_home()) echo 'is-current' ?>">
                  INFORMATION
                </a>
              </li>
              <li class="p-global-nav__item">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="p-global-nav__link <?php check('contact');?>">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          <ul class="p-header-sns">
            <li class="p-header-sns__item">
              <a href="https://twitter.com/coco_hack_ll" class="p-header-sns__link" target="_blank" rel="noopener noreferrer">
                <svg class="c-svg p-header-sns__svg" width="20" height="20">
                  <use xlink:href="<?php echo get_template_directory_uri(); ?>/img/svg/sprite.min.svg#icon-twitter" />
                </svg>
              </a>
            </li>
            <li class="p-header-sns__item">
              <a href="https://github.com/kokoro-hart" class="p-header-sns__link" target="_blank" rel="noopener noreferrer">
                <svg class="c-svg p-header-sns__svg" width="20" height="20">
                  <use xlink:href="<?php echo get_template_directory_uri(); ?>/img/svg/sprite.min.svg#icon-github" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <button id="js-drawer-button" class="p-header__button c-button-drawer u-hidden-md-up" aria-controls="js-drawer-nav" aria-expanded="false">
          <span class="c-button-drawer__line">
          </span>
        </button>
      </div>
      <div id="js-drawer-nav" class="p-drawer-nav u-hidden-md-up" aria-hidden="true">
        <div class="p-drawer-nav__inner">
          <ul class="p-drawer-nav__list">
            <li class="p-drawer-nav__item">
              <a href="<?php echo esc_url(home_url('/')); ?>" class="p-drawer-nav__link">
                TOP
              </a>
            </li>
            <li class="p-drawer-nav__item">
              <a href="<?php echo esc_url(home_url('/about')); ?>" class="p-drawer-nav__link">
                ABOUT
              </a>
            </li>
            <li class="p-drawer-nav__item">
              <a href="<?php echo esc_url(home_url('/works')); ?>" class="p-drawer-nav__link">
                WORKS
              </a>
            </li>
            <li class="p-drawer-nav__item">
              <a href="<?php echo esc_url(home_url('/information')); ?>" class="p-drawer-nav__link">
                INFORMATION
              </a>
            </li>
            <li class="p-drawer-nav__item">
              <a href="<?php echo esc_url(home_url('/contact')); ?>" class="p-drawer-nav__link">
                CONTACT
              </a>
            </li>
          </ul>
          <p class="p-drawer-nav__text">FOLLOW ME</p>
          <ul class="p-drawer-nav__sns p-sns">
            <li class="p-sns__item">
              <a href="https://twitter.com/coco_hack_ll" class="p-sns__link" target="_blank" rel="noopener noreferrer">
                <svg class="c-svg p-sns__svg" width="20" height="20">
                  <use xlink:href="<?php echo get_template_directory_uri(); ?>/img/svg/sprite.min.svg#icon-twitter" />
                </svg>
              </a>
            </li>
            <li class="p-sns__item">
              <a href="https://github.com/kokoro-hart" class="p-sns__link" target="_blank" rel="noopener noreferrer">
                <svg class="c-svg p-sns__svg" width="20" height="20">
                  <use xlink:href="<?php echo get_template_directory_uri(); ?>/img/svg/sprite.min.svg#icon-github" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>