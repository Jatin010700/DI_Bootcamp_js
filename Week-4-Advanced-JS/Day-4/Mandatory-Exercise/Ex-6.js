// [2] === [2] //false
// {} === {} //false

//----------------------------------//

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5

//---------------------------------------//

class animal {
    constructor(name,type,color){
        this.name = name
        this.type = type
        this.color = color
    }
}
 class mamal extends animal {
        sound(sound)
        {
        return `This ${this.type} named is ${this.name}, color ${this.color} and makes the sound: ${sound}`;  
    }
 }

const dog = new mamal("Blackie","chihuahua","brown");
console.log(dog.sound("Woof!!!"));

// const species = new mamal(`${this.sound} I'm a Dog, named ${this.name} and i'm ${this.color}`)
// console.log(species.sound("Woof!!!"))

const farmerCow = new mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moos!!!"))