<section class="main-navigation container-fluid">
  <div class="row mobile-menu">
    <button class="hamburger"></button>
    <button class="cross"></button>
  </div>
  <div class="col-sm-10 col-sm-offset-1 for-mobile-nav">
    <nav class="primary-nav col-sm-12" role="navigation">
      <?php wp_nav_menu (
        array(
          'theme_location'  =>  'primary'
        )
      );
      ?>
    </nav>
  </div>
</section>
