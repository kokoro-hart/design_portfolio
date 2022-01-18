
<?php get_header(); ?>

<main class="l-lower-info">
  <div class="l-container">
    <div id="js-first-view" class="p-lower-first-view">
      <h2 class="c-page-heading">
        <span class="c-page-heading__en is-wrap">
          <span class="is-slide-up u-delay05">
            INFORMATION
          </span>
        </span>
        <span class="c-page-heading__ja is-wrap">
          <span class="is-slide-up u-delay05">
            お知らせ&nbsp;&nbsp;ブログ  
          </span>
        </span>
      </h2>
    </div>
    <div class="p-info l-lower-info__contents js-trigger">
      <ul class="p-info__list is-fade-up">
        <?php
          $args = array(
            'post_type' => 'post',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC',
          );
          $info_posts = get_posts($args);
          foreach($info_posts as $post) : setup_postdata($post);
          $category = get_the_category();
        ?>
        <li class="p-info__item">
          <a href="<?php the_permalink(); ?>" class="p-info-item">
            <time class="p-info-item__date" datetime="<?php the_time('c'); ?>">
              <?php the_time('Y.n.j'); ?>
              <svg class="c-svg p-info-item__svg u-hidden-md-up" width="27" height="27">
                <use xlink:href="<?php echo get_template_directory_uri(); ?>/img/svg/sprite.min.svg#pen" />
              </svg>
            </time>
            <h3 class="p-info-item__title">
              <?php the_title(); ?>
            </h3>
          </a>
        </li>
        <?php endforeach; wp_reset_postdata(); ?>
      </ul>
    </div>
  </div>
</main>

<?php get_footer(); ?>