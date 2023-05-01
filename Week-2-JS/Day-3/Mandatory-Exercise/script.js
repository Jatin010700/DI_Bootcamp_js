
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
const changesPeople = people.map((person) =>
 {
    return person.replace("James", "Jason");
  });
  console.log(changesPeople);

changesPeople.push("Jatin")
const index = changesPeople.indexOf("Mary")
console.log("Mary's index is " + index)

let changes = changesPeople.slice(1, 3);
console.log(changes)

const index1 = changesPeople.indexOf("Foo")
console.log(index1) //Because Foo doesn't exist

const array = ["foo", "bar", "baz"];
const last = array[array.length - 1];
console.log(last);

//--------------------------------------------------

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Jason") {
      break;
    }
  }

  //--------------------Part 2----------------------

  let colors = ["Red", "Black", "Purple", "Aqua", "Crimson"]

  for (let i = 0; i < colors.length; i++) {
    let ranks;
    if (i === 0) {
      ranks = "st";
    } else if (i === 1) {
      ranks = "nd";
    } else if (i === 2) {
      ranks = "rd";
    } else {
      ranks = "th";
    }
    console.log("My " + [i+1] + ranks + " choice is " + colors[i])
  }

  //----------------part 3-------------------

  let user = prompt("Enter a number:");
  console.log(typeof user);
  
  while (Number(user) < 10) { 
    user = prompt("Enter a new number")
  }
  console.log("Number is greater than or equal to 10");

  //-------------part 4-----------------

  const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);

console.log("Numbers of apartments on first floor: ", building.numberOfAptByFloor.firstFloor);
console.log("Numbers of apartments on third floor: ", building.numberOfAptByFloor.thirdFloor);

console.log("Name of second tenant: ",building.nameOfTenants[1]);
console.log("Name of rooms for second tenant: ",building.numberOfRoomsAndRent["dan"][0]);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
  
  console.log(building.numberOfRoomsAndRent.dan[1]);

//-----------part 5-------------

let family = {
    father: 'John',
    mother: 'Mary',
    son: 'Mike',
    daughter: 'Jane',
}
for (let key in family) {
    console.log(family[key]);
}

//---------------part 6-----------------

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//don't know