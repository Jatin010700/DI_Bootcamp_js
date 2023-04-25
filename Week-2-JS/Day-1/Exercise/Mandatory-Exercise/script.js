let food = ("chicken");
let meal = ("dinner");
console.log("I eat" + " " + food + " " + "at every" + " " + meal)

//------------------------------------

//---------------part1---------------

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);

var myWatchedSeriesLength = myWatchedSeries.slice(myWatchedSeries);
console.log(myWatchedSeriesLength);

var myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

console.log("I watched 3 series:" + " " + myWatchedSeriesSentence);

//------------part 2-----------------

myWatchedSeries.splice(2,1, 'friends');
console.log(myWatchedSeries);

myWatchedSeries.push('the walking dead');
console.log(myWatchedSeries);

myWatchedSeries.splice(0,1);
console.log(myWatchedSeries);

console.log("money heist"[2]);

console.log(myWatchedSeries);

//-----------------------------------------------

let celsius = 10;
let fahrenheit = (celsius/ 5) * 9 + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

//------------------------------------------------

let c; //undefined
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23



console.log(3 + 4 + '5'); 75

//--------------------------------------

typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:NaN
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false

//-------------------------------

5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction: add 2 spaces
// Actual:add 2 spaces

" " + 0
// Prediction:0
// Actual:0

true + true
// Prediction:2
// Actual: 2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN