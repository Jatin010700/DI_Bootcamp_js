

//----------REDUX TESTING----------//
// import { store } from "./TESTING/store";
// import Day from './TESTING/day';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Day weekday={store.getState().weekday} />
//       </div>
//     )
//   }
// }
import React from 'react';
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;
