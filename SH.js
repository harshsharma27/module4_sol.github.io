(function(window) {
	var s = "Hello";
	var h = function (name) {
		console.log(s + " " + name);
	}

	window.h = h;

})(window);
