$(document).ready(function(){
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
      $('.portfolio-showcase li').fadeIn('slow');
    } else {
      // since category does not equal all-projects show project based on category css class
      $('.portfolio-showcase li').each(function(){
        if($(this).hasClass(category)) {
          //if the css class is equal to the category string above show li
          $(this).fadeIn('slow').show();
        } else {
          $(this).hide();
        }
      });
    }
  });
});
