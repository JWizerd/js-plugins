function accordianSlider(action, toggleSpeed, child, sibling){
  $(sibling).slideUp();
  $(child).on(action, function() {
    $(this).next()
      .slideToggle(toggleSpeed)
        .siblings(sibling).slideUp();
  });
}

$(document).ready(function(){
  accordianSlider('click', 500, '.faq-question', '.faq-answer');
});
