
<?php get_header(); ?>

<main class="l-lower-contact">
  <div class="l-container">
    <div id="js-first-view" class="p-lower-first-view">
      <h2 class="c-page-heading">
        <span class="c-page-heading__en is-wrap">
          <span class="is-slide-up">
            CONTACT
          </span>
        </span>
        <span class="c-page-heading__ja is-wrap">
          <span class="is-slide-up">
            お問い合わせ
          </span>
        </span>
      </h2>
    </div>
    <div class="l-lower-contact__thanks">
      <section class="p-contact-thanks">
        <div class="p-contact-thanks__inner">
          <h2 class="p-contact-thanks__heading">
            THANK YOU!
          </h2>
          <p class="p-contact-thanks__text">
            お問い合わせありがとうございます。<br>
            ご入力いただいたメールアドレスに自動送信メールをお送り致しました。
          </p>
        </div>
        <div class="p-contact-thanks__link-wrapper">
          <a href="<?php echo esc_url(home_url('/')); ?>" class="c-button-primary">
            TOP
          </a>
        </div>
      </section>
    </div>
  </div>
</main>

<?php get_footer(); ?>