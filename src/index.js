import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// var randomColor = Math.floor(Math.random() * 16777215).toString(16);
// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = '#' + randomColor;
//   document.body.innerHTML = '#' + randomColor;
// };
// setBg();
