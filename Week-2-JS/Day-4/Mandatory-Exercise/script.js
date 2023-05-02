function infoAboutMe(){
    console.log("My name is Jatin Oomajee. Age: 23. I like to game")
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavouriteColor){
    console.log("Your name is " + personName + ", you are " + personAge + " years old, your favourite color is " + personFavouriteColor)
}
infoAboutPerson("David", 45, "Blue")
infoAboutPerson("Josh", 12, "yellow")

//------------------part 2------------------------

function calculateTip(){
    let bill = parseFloat(prompt("Amount of bill"))
    let tip;
    if (bill < 50){
        tip = 0.2;
    } 
    else if (bill >= 50 && bill<= 200){
        tip = 0.15;
    }
    else {
        tip = 0.1;
    }
    const totalTip = bill * tip;
    const totalBill = bill + tip;

    console.log(`Tip amount: $${totalTip.toFixed(2)}`);
    console.log(`Total bill: $${totalBill.toFixed(2)}`);
}
calculateTip()

//---------------part 3---------------------

function isDivisible(){
    let i = 0
    for (let i = 0; i < 500; i++){
        if (i % 23 === 0) {
            console.log(i);
            i += i;
    }
}
console.log("All numbers divisble by 23:" + i);
}
isDivisible();

//-------------------part 4-------------------------

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["Banana", "Apple", "Orange"];
function myBill(){
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
      const item = shoppingList[i];
      if (item in stock && stock[item] > 0) {
        total += prices[item];
        stock[item] -= 1;
      }
      return total;
}
}
myBill()

//------------------part 5---------------------

function changeEnough(itemPrice, amountOfChange) {
    const quarters = amountOfChange[0] * 0.25;
    const dimes = amountOfChange[1] * 0.1;
    const nickels = amountOfChange[2] * 0.05;
    const pennies = amountOfChange[3] * 0.01;
  
    const totalChange = quarters + dimes + nickels + pennies;
  
    return totalChange >= itemPrice;
  }
  
  console.log(changeEnough(4.25, [25, 20, 5, 0]));

  //-------------------part 6--------------------


  // function hotelCost() {
  //   let numOfNights;
  //   do {
  //     numOfNights = prompt("How many nights would you like to stay?");
  //   } while (!numOfNights || isNaN(numOfNights));
  
  //   return 140 * numOfNights;
  // }
  
  // function planeRideCost() {
  //   let destination;
  //   do {
  //     destination = prompt("Where do you want to go?");
  //   } while (!destination || typeof destination !== "string");
  
  //   switch (destination.toLowerCase()) {
  //     case "london":
  //       return 183;
  //     case "paris":
  //       return 220;
  //     default:
  //       return 300;
  //   }
  // }
  
  // function rentalCarCost() {
  //   let numOfDays;
  //   do {
  //     numOfDays = prompt("How many days would you like to rent a car?");
  //   } while (!numOfDays || isNaN(numOfDays));
  
  //   let cost = 40 * numOfDays;
  //   if (numOfDays >= 10) {
  //     cost *= 0.95; // 5% discount for rentals over 10 days
  //   }
  //   return cost;
  // }
  
  // function totalVacationCost() {
  //   let hotelCost = hotelCost();
  //   let planeRideCost = planeRideCost();
  //   let rentalCarCost = rentalCarCost();
  //   let totalCost = hotelCost + planeRideCost + rentalCarCost;
  //   alert(`The hotel cost: $${hotelCost}, the plane tickets cost: $${planeRideCost}, the car rental cost: $${rentalCarCost}. \nTotal cost of the vacation: $${totalCost}`);
  // }
  
  // // Call the function to calculate the total cost of the vacation
  // totalVacationCost();