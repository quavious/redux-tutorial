import {createStore} from 'redux'

const ADD = "ADD"
const DELETE = "DELETE"

const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state]
        case DELETE:
            return state.filter(el => el.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
export const actionTriggers = {
    addToDo,
    deleteToDo,
}
export default store;