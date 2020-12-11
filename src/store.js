import {configureStore, createSlice} from '@reduxjs/toolkit';

const toDo = createSlice({
    name: "toDoReducer",
    initialState: [],
    reducers : {
        addToDo: (state, action) => 
            [{text: action.payload, id: Date.now()}, ...state],
        deleteToDo : (state, action) => 
            state.filter(el => el.id !== action.payload),    
    }
})
const store = configureStore({reducer: toDo.reducer, devTools: true})

store.subscribe(() => console.log(store.getState()))

const {addToDo, deleteToDo} = toDo.actions;

export {addToDo, deleteToDo};

export default store;