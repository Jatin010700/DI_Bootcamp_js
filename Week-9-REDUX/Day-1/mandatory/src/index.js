import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//------REDUX TESTING------//
// import { Provider } from 'react-redux';
// import { store } from "./store";
//-------------------//

//-------DAILY-------//
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './DAILY/reducers';

const root =  ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> <---REDUX TESTING*/}
      <Provider store={createStore(reducers)}>
      <App />
      </Provider>
      {/* </Provider> <---REDUX TESTING */}
    </React.StrictMode>
  );


  //---------REDUX TESTING--------//
// const root =  ReactDOM.createRoot(document.getElementById('root'));
// const render = () =>{
//   root.render(
//     <React.StrictMode>
//       {/* <Provider store={store}> */}
//       <App />
//       {/* </Provider> */}
//     </React.StrictMode>
//   );
// }
// render()

// store.subscribe(render)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
