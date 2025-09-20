import { useState } from 'react'
import { TodoProvider } from './contexts/TodoContext';
import './App.css'
import useTodo from './contexts/TodoContext'
import { useEffect } from 'react';
import { TodoForm, TodoItem } from './components';

function App() {
const[todos,setTodos] = useState([]);

const addTodo =(todo)=> {
// Here 'todo' is also an object 
// setTodos((prevtodo)=>[{id : Date.now(),...todo},...prevtodo])
setTodos((prevtodo)=>[todo,...prevtodo])


}

const updatedTodo =(id,todo)=> {
// todos.map((todo)=>todo.id === id ) // I was trying to find the todo which has id same
setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ? todo : prevTodo))
}
const deleteTodo = (id) => { 
setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
}



 const toggleCompleted = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }


useEffect(()=>{
const todos = JSON.parse(localStorage.getItem("todos"))

if(todos && todos.length > 0 ){
setTodos(todos)
}
},[])


useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])






  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleCompleted}} >
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
{     todos.map((todo)=>        
<div key={todo.id} className="w-full" > <TodoItem todo={todo} /> </div> 

)   }

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
