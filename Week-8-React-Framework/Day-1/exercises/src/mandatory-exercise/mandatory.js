import React from "react";

import UserFavoriteColors from "./UserFavouriteColors";//--------part 3--------//

import Part4 from "./Exercise4";//--------part 3--------//

//--------part 1--------//
const element = React.createElement('h1', null, 'I do not use JSX');

//--------part 2--------//
const myelement = <h1>I Love JSX!</h1>;

const sumNum = 5 + 5;

//--------part 3--------//
const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  
function Exercise () {
   return (
<div>
    {element} 
    {myelement}
    <p>React is {sumNum} times better with JSX</p>
    <h3>{user.firstName} {user.lastName}</h3>

    <UserFavoriteColors user={user.favAnimals}/>

    <Part4></Part4>
</div>
   )
}

export default Exercise;