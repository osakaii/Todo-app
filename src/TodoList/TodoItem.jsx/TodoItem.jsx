import React, { useState } from 'react'
import styles from './TodoItem.module.css'
function TodoItem(props) {
    const [todoName,setTodoName] = useState(styles.name)
    const [todoState,setTodoState] = useState(false)
    const activityHandler = ()=>{
        if(todoState){
            setTodoState(false)
            setTodoName(styles.name)
        }
        else if(!todoState){
            setTodoState(true)
            setTodoName(styles.name + " " + styles.unactive)
        }
    }
    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.checkbox} onChange={()=>activityHandler()} checked={todoState}/>
            <p className={todoName}>{props.name}</p>
            <button className={styles.button} onClick={()=>props.removeTodo(props.id)}></button>
        </div>
    )
}

export default TodoItem
