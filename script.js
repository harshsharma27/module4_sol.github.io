(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var f = names[i].charAt(0).toLowerCase();

  if (f === 'j') {
    b(names[i]);
  }
  else {
    h(names[i]);
  }
}

})();



