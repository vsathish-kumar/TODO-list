import React, { useState } from 'react'
import "./App.css"
import TodoInput from "./TodoInput"
import Todolist from "./Todolist" 
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
  
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h2 className="app-heading">TO DO LIST</h2>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem= 
             {deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App