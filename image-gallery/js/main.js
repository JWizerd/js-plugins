function filterPortfolioCategories(trigger, categoryHeadline)  {
  $('nav a').on('click', function(e){
    e.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');

    // Set project heading text to current category clicked
    $('.gallery-header').text($(this).text());

    // get and filter link text for category
    var category = $(this).text().toLowerCase().replace(' ', '-');

    // Remove hidden class if 'all-projects' is selected
    if (category == 'all-projects') {
      // show all projects. fadeIn gives all elms full opacity
      $('.portfolio-showcase li a').fadeIn('slow');
    } else {
      // since category does not equal all-projects show project based on category css class
      $('.portfolio-showcase li a').each(function(){
        if($(this).hasClass(category)) {
          //if the css class is equal to the category string above show li
          $(this).fadeIn('slow').show();
        } else {
          $(this).hide();
        }
      });
    }
  });
}

function appendProjectDataOnHover() {
  $('.portfolio-showcase li a').hover(
    function() {
      var projectTitle = $(this).data('title');
      var projectDesc = $(this).data('desc');

      if (projectDesc == null || projectDesc == '') {
        projectDesc = 'Click to Enlarge';
      }

      $(this).append('<div class="overlay"></div>');

      var divOverlay = $('.overlay');
      $(divOverlay).html(
        '<h2 class="project-title">' + projectTitle + '</h2>' +
        '<p class="project-desc">' + projectDesc + '</p>');

      divOverlay.fadeIn(200);
    },
    function() {
      $(this).find('.overlay').remove();
    }
  );
}

$(document).ready(function(){
  // on hover over project li display overlay div containing data attributes
  appendProjectDataOnHover();
  // the filtering relies on the notion that categories have been manually set in the css class for each project
  filterPortfolioCategories();
});
