
for (let i = 0; i < 15; i++) {

    if ((i % 2) == 0 ){
        console.log(i + "is even")
    }
    else { 
        console.log (i + "is odd")    
    }
}

//--------------------------------

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
    let loop = names[i];
  
    if (typeof loop !== "string") {
      continue;
    }
  
    if (loop[0] !== loop[0].toUpperCase()) {
      loop = loop[0].toUpperCase() + loop.slice(1);
    }
  
    console.log(loop);
  }

for (let i = 0; i < names.length; i++) {
    let loop = names[i];
  
    if (typeof loop !== "string") {
      break;
    }
  
    console.log(loop);
  }


  //---------------------------------

//   const namesList = ["bob", "sara", "Juan","Young"];
//    console.log(namesList);

// for (i=0; i < namesList.length; i++) {
//   console.log("Good morning " + namesList[i])
// }

//----------------------------------------
const namesList = [
  "Vincent",
  "Blessing",
  "Nilesh",
  "Dhivyesh",
  "Abeenesh",
  "Jatin",
];

// Method 1, for loop
// for (let i = 0; i < namesList.length; i++) {
//   console.log("Good morning " + namesList[i]);
// }

// Method 2, while loop
// let i = 0;
// while (i < namesList.length) {
//   console.log("Good morning " + namesList[i]);
//   i++;
// }

// Method 3, foreach loop
// namesList.forEach((el) => {
//   console.log("Good morning " + el);
// });

// Method 4, for in loop
// for (const i in namesList) {
//   console.log("Good morning " + namesList[i]);
// }

namesList.forEach((ele) => {
  console.log("Hello world " + ele);
});
