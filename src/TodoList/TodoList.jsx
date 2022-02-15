import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem.jsx/TodoItem';


function TodoList(props) {
    
    return (
        <div >
            {
                props.todos.map((el,index)=>{
                    return(
                        <div key={index}>
                            <TodoItem name = {el.name} id = {el.id} removeTodo = {props.removeTodo}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList
