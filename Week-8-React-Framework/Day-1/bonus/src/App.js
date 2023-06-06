import './App.css';

//---------Exercise GOLD----------//
import Getcelebrities from './Exercises-Gold/BootstrapCard';

//--------GOLD PART 2---------//
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function App() {
  return (
  <div>
    <Getcelebrities></Getcelebrities>
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

export default App;
