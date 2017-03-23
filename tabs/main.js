(function(){ //IIFE

  $('document').ready(function() {

    $('.tab-info').first().addClass('show-tab');
    $('.tab').first().addClass('active');

    $('.tab').on('click', function() {
      var tab = $(this);
      var tabInfo = $('.tab-info').get($(this).index()); // get the corresponding li.tab-info info for a given tab by comparing indexes

      $(tab).addClass('active')
            .siblings()
            .removeClass('active');

      $(tabInfo).addClass('show-tab')
                .siblings()
                .removeClass('show-tab');
    });

  });

}());
