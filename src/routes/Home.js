import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addToDo, deleteToDo} from '../store'
import ToDo from '../components/to-do'

const Home = (props) => {
    const {toDos, addToDo} = props;

    const [text, setText] = useState("");
    const onChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    } 

    const onSubmit = (e) => {
        e.preventDefault()
        addToDo(text)
        setText("");

        console.log(toDos)
    }
    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} name="todo" id="todo"/>
            <button id="add">ADD</button>
        </form>
        <ul id="list">
            {toDos.map((el) => <ToDo key={el.id} text={el.text} id={el.id}/>)}
        </ul>
    </>
}

// Not The State In Component Home. The State from Redux Store.
const mapStateToProps = (state, ownProps) => {
    // mapStateToProps function
    return {
        toDos: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo : (text) => dispatch(addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);