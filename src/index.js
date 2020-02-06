import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register("sw.js")
//     .then((register) => {
//         console.log("service workder registered")
//     })
//     .catch((error) => {
//         console.log("SW register failed")
//     })
// }