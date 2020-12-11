import {createStore} from 'redux'
import {createAction, createReducer} from '@reduxjs/toolkit';

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

// const reducer = (state=[], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{text: action.payload, id: Date.now()}, ...state]
//         case deleteToDo.type:
//             return state.filter(el => el.id !== action.payload)
//         default:
//             return state
//     }
// }

const reducer = createReducer([], {
    [addToDo]: (state, action) => 
        [{text: action.payload, id: Date.now()}, ...state]
    ,
    [deleteToDo] : (state, action) => 
        state.filter(el => el.id !== action.payload),
})

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
export const actionTriggers = {
    addToDo,
    deleteToDo,
}
export default store;