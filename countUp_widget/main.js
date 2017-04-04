// each interval append the newly adjusted totalDisplayNum until totalDisplayNum == total
// jQuery Animate Explained https://www.sitepoint.com/guide-jquery-animate-method/

function Counter(className) {
  this.className = className;
  this.total = parseInt($(this.className).data('count'));
  this.setInitialValue = function() { $(this.className).html(0); };
  this.countUp = function() {
    debugger;
    $(this.className).prop('Count', 0).animate(
      {
        Count: this.total
      },
      {
        duration: 2500,
        easing: 'swing',
        step: function () {
        $(this).text('$' + parseInt(this.Count).toLocaleString());
      },
        complete: function(){
          $(this).html(this.Count.toLocaleString);
        }
    });
  };
}

$(document).ready(function() {
  var NewCounter = new Counter('.counter');
  NewCounter.setInitialValue();
  setTimeout(function(){
    NewCounter.countUp();
  }, 1000);
});
