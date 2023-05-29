let getJS = require('./date.js');

console.log(getJS.getTimeLeftUntilNewYear)

//-------------------------

// Hardcoded birthdate in the format "YYYY-MM-DD"
var birthdate = '1990-05-15';

// Call the function and display the result
console.log(getJS.calMinLiv(birthdate));

//-----------------------

console.log(getJS.getNext());