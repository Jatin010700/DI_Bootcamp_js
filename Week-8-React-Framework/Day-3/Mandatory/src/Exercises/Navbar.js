import React from 'react';
import {Routes, Route, Link } from "react-router-dom";

import Home from './Home';

function Navbar() {
  return (
  <nav>
    
    <ul>
      <li><Link to="/">Daily Challenge</Link></li>
    </ul>
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>

 </nav>
);
}

export default Navbar;