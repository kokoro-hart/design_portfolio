    <footer class="p-footer l-footer js-footer">
      <div class="l-footer__inner l-container">
        <div class="p-footer__contents">
          <div class="p-footer__info p-footer-info">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="p-footer-info__link">
              <p class="p-footer-info__heading">
                Welcome,<br>
                let's complete it<br>
                together.
              </p>
              <p class="p-footer-info__text">
                お気軽にお問い合わせください
              </p>
            </a>
            <p class="p-footer-info__follow">
              FOLLOW ME
            </p>
            <ul class="p-footer-info__sns p-sns">
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
          <ul class="p-footer__nav p-footer-nav">
            <li class="p-footer-nav__item">
              <a href="<?php echo esc_url(home_url('/')); ?>" class="p-footer-nav__link">
                TOP
              </a>
            </li>
            <li class="p-footer-nav__item">
              <a href="<?php echo esc_url(home_url('/about')); ?>" class="p-footer-nav__link">
                ABOUT
              </a>
            </li>
            <li class="p-footer-nav__item">
              <a href="<?php echo esc_url(home_url('/works')); ?>" class="p-footer-nav__link">
                WORKS
              </a>
            </li>
            <li class="p-footer-nav__item">
              <a href="<?php echo esc_url(home_url('/information')); ?>" class="p-footer-nav__link">
                INFORMATION
              </a>
            </li>
            <li class="p-footer-nav__item">
              <a href="<?php echo esc_url(home_url('/contact')); ?>" class="p-footer-nav__link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <p class="p-footer__copyright">
          <small lang="en">
            © cocosyu. 2021
          </small>
        </p>
      </div>
    </footer>
  </div><!-- /wrapper -->

  <?php wp_footer(); ?>
</body>
</html>