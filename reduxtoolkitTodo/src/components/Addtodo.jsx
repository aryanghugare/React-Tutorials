import React from 'react';
import { useState } from 'react';
 import {useDispatch, useSelector} from 'react-redux';
import { addTodo , updateTodo,setEditingId,setEditingText,toggleEditing } from '../features/todo/todoSlice';

function Addtodo() {
const[input,setInput] = useState("")
const[update,setUpdate] = useState(false)
const dispatch = useDispatch()


const addTodoHandler = (e) => {
e.preventDefault();

if(!input.length>0) return ;

if(!edits){  // This means if we are not in editing mode
dispatch(addTodo(input))  // so here 'input' goes as payload , dont need to write huge things manually  , 
// here payload is not an object 

}
else {
dispatch(setEditingText(input))
dispatch(toggleEditing(!edits)) 
dispatch(updateTodo())
}

setInput("");

}

let edits  = useSelector((state)=> state.editingTodo) 

  return (
   <form onSubmit={addTodoHandler} className='mt-10 flex  '>

<input type="text" 
placeholder={ edits ? "Update the todo" : "Enter the todo"}
value={input}
onChange={(e)=> setInput(e.target.value)}
className='w-120 flex   rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
/> 
<button 
type="submit" className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition mx-23' >
{edits? "Update" : "Add"}
</button>
{

}
 
</form>
  )
}

export default Addtodo