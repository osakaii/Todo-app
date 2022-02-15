import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App() {
  const [todos,setTodos] = useState([
    { name: "first todo", id: 1, isActive: true} 
  ])
  const addTodo = (value) =>{
    let todo = {
      name: value,
      id: todos.length+1,
      isActive:true
    }
    setTodos([...todos,todo])
  }
  
  const removeTodo = (id) =>{
    setTodos(todos.filter(el=>el.id !== id))
  }
  return (
    <div className="App-header">
      <h1>MY TODO APP</h1>
      <Form addTodo = {addTodo}/>
      <TodoList todos = {todos} removeTodo = {removeTodo}/>
    </div>
  );
}

export default App;
