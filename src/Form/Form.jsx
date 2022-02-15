import React, { useState } from 'react'
import styles from "./Form.module.css"

function Form(props) {
    const [inputValue,setInputValue] = useState('')
    const addTodo = (event) =>{
        event.preventDefault()
        props.addTodo(inputValue)
        setInputValue('')
    }
    return (
        <div>
            <form onSubmit={e => addTodo(e)}>
                <input type="text" required value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default Form
