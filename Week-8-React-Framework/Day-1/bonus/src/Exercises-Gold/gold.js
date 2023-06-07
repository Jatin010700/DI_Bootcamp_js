import React from 'react';

//---------Exercise GOLD----------//
import Getcelebrities from './BootstrapCard';

//--------GOLD PART 2---------//
const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function ExGold() {
  return (
    <div>
        <Getcelebrities/>
        <div className="list-group">
        {planets.map((planet, index) => (
        <li className="list-group-item" key={index}>
          {planet}
        </li>
      ))}
    </div>

    </div>
  );
}

export default ExGold;