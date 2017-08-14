
var fetchline1inLocal = function(callback) {
  $.getJSON('./assets/thirukkural.json', function(data) {
    var r = Math.round(Math.random()*(data.length-1));
	var line1 = data[r][0];
	var line2= data[r][1];
	var	tamilMeaning = data[r][2];
	var author= data[0][3];
    callback(line1, line2, tamilMeaning, author);
  });
};


var changeline1 = function() {
  callback = function(line1, line2, tamilMeaning, author) {
    $("p#line1, p#line2, author").fadeOut(function() {
      $("p#line1").text(line1).fadeIn(function() {
        $("p#line2").text(line2).fadeIn(function(){
			$("p#author").text(author).fadeIn(function(){
			$("p#tamilMeaning").text(tamilMeaning).fadeIn();
			});
		});
		
      });
    });
	
  };
  fetchline1inLocal(callback);
};

$(window).load(function() {
  changeline1();
  });