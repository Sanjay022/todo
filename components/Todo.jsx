import React from "react";
import { useState } from "react";
function Todo(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo =()=>{
        if(input.trim() === ''){
            alert("Please enter a todo item");
            return;
        }

        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
        alert("Todo item added successfully");
    }

    const toggleTodo =(id) =>{
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed} : todo
        ))
    }
   
    return(
        <div style={{maxWidth: '400px',
                    margin: '50px auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    textAlign: 'center'}}>
            <h1>Todo App</h1>
            
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop:'20px'}}>
                <input 
                type="text"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                placeholder="Enter Your text"
                style={{padding: '8px'}} />
                <button style={{padding: '8px 16px', cursor: 'pointer'}} onClick={addTodo}>Add</button>   
            </div>
            <ul style={{listStyleType: 'none', padding: 0, marginTop: '20px'}}>
                {todos.map(todo =>(
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <input 
                        type="checkbox"
                        checked = {todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        style={{marginRight: '10px', cursor: 'pointer'}} />

                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                            color: todo.completed ? 'gray' : 'black',
                        }}>
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>

            
        </div>
    )
}

export default Todo;    