// each interval append the newly adjusted totalDisplayNum until totalDisplayNum == total
// jQuery Animate Explained https://www.sitepoint.com/guide-jquery-animate-method/

function Counter(className) {
  // We utilize the self var so other methods within the class have access to it. Similar to a class variable in ruby.
  var self = this;
  this.className = className;
  this.total = parseInt($(this.className).data('count'));
  this.setInitialValue = function() { $(this.className).html(0); };
  this.countUp = function() {
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
          $(this).html("$" + this.Count.toLocaleString());
        }
    });
  };
  this.execute = function() {
    self.setInitialValue();
    setTimeout(function(counter){
      self.countUp(); }, 1000);
  }
}

$(document).ready(function() {
  var NewCounter = new Counter('.counter');
  NewCounter.execute();
});
