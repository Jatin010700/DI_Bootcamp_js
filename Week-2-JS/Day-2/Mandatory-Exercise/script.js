let x = 5;
let y = 2;

if (x>y){
console.log("x is the biggest number");
} 
else {
   console.log("y is the weakest number")
}

//---------------------------------------------

let newDog =("Chihuahua");
console.log(newDog.length)

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua"){
    console.log("I love, Chihuahua it’s my favorite dog breed");
}
else{
    console.log("I don't care, I prefer cats");
}

//----------------------------------


let number = prompt("Please enter a number");

if (number % 2 == 0){
    console.log(number + " " + "is an even number")
}
else{
    console.log(number + " " +"is an odd number")
}

//-----------------------------------------

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
 let account =(users.length);
 console.log(account)

 if (users === 0) {
    console.log("no one is online");
  } else if (users == 1) {
    console.log(users[0] + " is online");
  } else if (users == 2) {
    console.log(users[1] + " and " + users[2] + " are online");
  } else if (users != 2){
    console.log(users[0] + ", " + users[1] + " and " + " more are online");
  }