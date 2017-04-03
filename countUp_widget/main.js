// each interval append the newly adjusted totalDisplayNum until totalDisplayNum == total
// jQuery Animate Explained https://www.sitepoint.com/guide-jquery-animate-method/

function Counter(className) {
  this.className = className;
  this.total = parseInt($(this.className).data('count'));
  this.countUp = function() {
    $(this.className).prop('Count', 0).animate(
      {
        Count: this.total
      },
      {
        duration: 1500,
        easing: 'swing',
        step: function () {
        $(this).text(Math.ceil(this.Count).toLocaleString());
      }
    });
  };
}

var NewCounter = new Counter('.counter');

NewCounter.countUp();
