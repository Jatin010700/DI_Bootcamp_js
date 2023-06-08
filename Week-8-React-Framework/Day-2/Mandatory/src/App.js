import './App.css';
import Vote from './Daily/Vote';
import Getcar from './Components/Car';

import Phone from './Components/Phone';

import Color from './Components/Color';

export const carinfo = {
  name: "Ford", 
  model: "Mustang"
};


function App() {
  return (
    <div>
      <h1>Daily Challenge</h1>
      <Vote/>
     <Getcar/> 
     <Phone/>
     <Color/>
    </div>
  );
}

export default App;
