let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits);

fruits.splice(0,1);
console.log(fruits)

fruits.sort();
console.log(fruits);

fruits.push("kiwis");
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.reverse();
console.log(fruits);

//----------------------------

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1] [1] [0]);