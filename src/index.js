// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import {createStore} from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
let value = document.getElementById("value")
let count = 0;

const INCREMENT = "INCREMENT"
const DISCREMENT = "DISCREMENT"

const reducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DISCREMENT":
      return state - 1;
    default:
      return state
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
  value.innerText = store.getState()
});

plus.addEventListener("click", () => {
  store.dispatch({type: INCREMENT})
})

minus.addEventListener("click", () => {
  store.dispatch({type: DISCREMENT})
})

console.log(store.getState())
