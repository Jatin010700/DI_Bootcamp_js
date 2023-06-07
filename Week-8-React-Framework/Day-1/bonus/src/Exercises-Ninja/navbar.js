import React from 'react';
import {Routes, Route, Link } from "react-router-dom";

import Landingpage from './landingPage';
import ExGold from '../Exercises-Gold/gold';


function Navbar() {
  return (
  <nav>
    <ul>
      <li><Link to="Gold">Exercise Gold</Link></li>
      <li><Link to="Landingpage">Exercise Ninja</Link></li>
    </ul>
    <Routes>
    <Route exact path="/Gold" element={<ExGold />} />
      <Route exact path="/Landingpage" element={<Landingpage />} />
    </Routes>
 </nav>
);
}



export default Navbar;