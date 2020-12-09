import {createStore} from 'redux'

const ADD = "ADD"
const DELETE = "DELETE"

export const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}

export const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case ADD:
            return [{type: action.text, id: Date.now()}, ...state]
        case DELETE:
            return state.filter(el => el.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe()

export default store;