import React from 'react';
import { useState } from 'react';
 import {useDispatch} from 'react-redux';
import { addTodo , updateTodo } from '../features/todo/todoSlice';

function Addtodo() {
const[input,setInput] = useState("")
const dispatch = useDispatch()

const addTodoHandler = (e) => {
e.preventDefault();
dispatch(addTodo(input))  // so here 'input' goes as payload , dont need to write huge things manually  , 
// here payload is not an object 

setInput("");

}

  return (
   <form onSubmit={addTodoHandler} className='mt-10 flex  '>

<input type="text" 
placeholder='Enter a TODO '
value={input}
onChange={(e)=> setInput(e.target.value)}
className='w-120 flex   rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
/>
<button 
type="submit" className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition mx-23' >
Add Todo 
</button>


 
</form>
  )
}

export default Addtodo