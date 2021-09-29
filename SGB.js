(function(window) {
	var s = "Good Bye";
	var b = function (name) {
  		console.log(s + " " + name);
	}
	
	window.b = b;

})(window);
