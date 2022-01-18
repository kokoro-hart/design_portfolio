<?php get_header(); ?>

<main class="l-single-info p-single-info">
  <div class="l-container">
    <div id="js-first-view" class="l-single-info__heading">
      <div class="c-single-heading">
        <h1 class="c-single-heading__head is-wrap">
          <span class="is-slide-up">
            <?php the_title(); ?>
          </span>
        </h1>
        <time datetime="<?php the_time('c'); ?>" class="c-single-heading__foot is-fade-up">
          <?php the_time('Y.n.j') ?>
        </time>
      </div>
    </div>
    <div class="l-single-info__contents p-single-info__contents">
      <?php the_content(); ?>
    </div>
    <div class="p-single-info__link-wrapper">
      <a href="<?php echo esc_url(home_url('/information')); ?>" class="c-button-primary">
        BACK INFORMATION
      </a>
    </div>
  </div>
</main>

<?php get_footer(); ?>