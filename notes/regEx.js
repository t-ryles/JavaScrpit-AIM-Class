// Notes:
// [a-z] lower case a - z charaters
// [A-Z] upper case a - z charaters

var reg = /[a-z]/gi; // Matching letter, not case sensitave
var reg2 = new RegExp(/[a-z]/, 'i');

const patterns = {
  telephone : /^\d{3}-\d{3}-\d{4}$/,
  
}