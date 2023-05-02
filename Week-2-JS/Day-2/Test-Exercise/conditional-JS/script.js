let age = prompt ('age');

if (age > 18)

console.log(age)

//--------------------------------------

var day = 1;   //change and try with different values

switch(day)
{
  case 1:      //if day = 1
    console.log("Monday");
    break;
  case 2:      //if day = 2
    console.log("Tuesday");
    break;
  case 3:      //if day = 3
    console.log("Wednesday");
    break;
  case 4:      //if day = 4
    console.log("Thursday");
    break;
  case 5:      //if day = 5
    console.log("Friday");
    break;
  case 6:      //if day = 6
    console.log("Saturday");
    break;
  case 7:      //if day = 7
    console.log("Sunday");
    break;
  default:    //if day doesn't match any of above
    console.log("Invalid");
}
