import React, { useState } from 'react'
import {connect} from 'react-redux'

const Home = (props) => {
    const {toDos} = props;

    const [text, setText] = useState("");
    const onChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    } 

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        setText("");
    }
    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} name="todo" id="todo"/>
            <button id="add">ADD</button>
        </form>
        <ul id="list">
            {toDos.map(el => <li>{el}</li>)}
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

export default connect(mapStateToProps)(Home);