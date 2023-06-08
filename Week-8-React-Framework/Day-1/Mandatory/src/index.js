import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Carousel from './Daily-challenge/carousel'; //------dailychallenge---------//

import Exercise from './mandatory-exercise/mandatory'; //--------mandadoryExercise---------//

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   <Carousel/> 
   <Exercise/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
