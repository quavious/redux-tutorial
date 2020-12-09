import React, { useState } from 'react'

const Home = () => {
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
        <ul id="list"></ul>
    </>
}

export default Home;