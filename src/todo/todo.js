import React, { useContext, useRef } from 'react';
import {GlobalProvider} from './contextApi'; 

const Todo = () => {
    const [input, handleChange, handleSubmit, todos, handleDelete, handleComplete, handleDelAll] = useContext(GlobalProvider);
    const centring={
        textAlign:'center',
        marginTop: '30px'
    }
    const bgColor ={
        backgroundColor: 'black',
        color: 'white',
        padding:'5px'
    }
  return (
    <div style={centring}>
      <input type="text" value={input} onChange={handleChange} autoFocus />{' '}
      <button onClick={handleSubmit}>Add</button>{' '}
      <button onClick={handleDelAll}>Remove All</button>
      <ul style={{backgroundColor:'white', margin:'0 500px'}}>
        {todos.map(todo =>{
            return (
            <div key={todo.id} style={{marginTop: '10px'}}>    
            {todo.isCompleted ? <del style={bgColor}>{todo.items}</del> : <span style={bgColor}>{todo.items}</span>}{' '}
            <button onClick={()=>handleComplete(todo.id)}>{todo.isCompleted ? 'Completed' : 'To Complete'}</button>{' '}
            <button onClick={()=>handleDelete(todo.id)}>X</button>{' '}
            </div>)
        })}
      </ul>
    </div>
  )
}

export default Todo;
