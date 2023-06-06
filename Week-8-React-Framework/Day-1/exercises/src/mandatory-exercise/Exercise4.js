import React from "react";

import "./Exercise4.css"

function Part4 () {
    return (
 <div>
   <h1 style={style_header}>This is a header</h1>
   <p className="para">This is a Paragraph</p>
   <a href="-">This is a link</a>
   <form>
    <label>Enter your name:</label> 
    <input type="text"></input>
   </form>
   <h2>Here is a image</h2>
   <img src="./assets/logo192.png" alt=""/>

   <ul>
    <h3>This is a list</h3>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
   </ul>
 </div>
    );
 }
 
 const style_header = {
    color: "red",
    backgroundColor: "LightBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
 export default Part4