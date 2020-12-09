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

const form = document.getElementById("form")
const input = document.getElementById("todo")
const button = document.getElementById("button")
const ul = document.getElementById("todos")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // Never Mutate State.
      return [{text: action.text, id: Date.now()}, ...state]
    case DELETE_TODO:
      return state.filter(el => el.id !== parseInt(action.id, 10))
    default:
      return state;
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.subscribe(() => paintToDos())

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  const targetId = e.target.parentNode.id
  store.dispatch(deleteToDo(targetId))
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  input.value = "";

  toDos.forEach(todo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    
    btn.innerText = "delete"
    btn.addEventListener("click", (e) => dispatchDeleteToDo(e))

    li.id = todo.id
    li.innerText = todo.text
    li.appendChild(btn)
    
    ul.appendChild(li)
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  dispatchAddToDo(input.value)
})


