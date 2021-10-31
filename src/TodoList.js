import React, { useState } from 'react'
import "../src/index.css"

const TodoList = ( props ) => {
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState("");
    const [count, setCount] = useState(0);

const onSubmit = (event) => {
    event.preventDefault()
    if (todoName !== "") {
    setTodos([...todos, {id: count, name: todoName}])
    setTodoName("")
    setCount(count + 1)
    }
}    

function onDoubleClick(name) {
    setTodos(todos.filter(e => e["id"] !== name))
    setCount(count - 1)
}

const buttonStyle = {
    marginBottom: "30px",
}

const h1Style = {
    marginTop: "20px",
}

    return (
        <div className='todoListMain'>
            <h1 style={h1Style}>Todo List</h1>
            <div className='header'>
                <form onSubmit={onSubmit}>
                    <input value={todoName} onChange={e => setTodoName(e.target.value)}></input>
                    <button style = {buttonStyle} type='submit'>Add</button> 
                </form>
                <p>Number of todo items: {count}</p>
                {todos.map(item => (
                <div><button onDoubleClick={() => onDoubleClick(item.id)}>{item.name}</button></div>
                ))}
            </div>
        </div>
    )
}

export default TodoList;