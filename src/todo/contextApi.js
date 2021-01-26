import React, { createContext, useState } from 'react'

export const GlobalProvider = createContext();
const Provider = (props) => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([])
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            items: input,
            id: Math.random(),
            isCompleted: false
        }
        if(input !== ''){
        setTodos(todos.concat(data))
        setInput('')
        console.log(todos);
        }
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    /*const handleEdit = (id) =>{
        let find = todos.find(todo => todo.id === id)
        setInput(find.items)
    }*/
    const handleComplete=(id)=>{
        const completed = todos.map(todo =>{
            if(todo.id === id){
                todo.isCompleted=!todo.isCompleted
            }
            return todo
        })
        setTodos(completed);
    }
    const handleDelAll = () => {
        setTodos([]);
    }
  return (
    <>
      <GlobalProvider.Provider 
      value={[input, 
      handleChange, 
      handleSubmit, 
      todos, 
      handleDelete, 
      handleComplete,
      handleDelAll]}>
          {props.children}
      </GlobalProvider.Provider>
    </>
  )
}

export default Provider;
