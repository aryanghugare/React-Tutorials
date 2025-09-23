import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeTodo , updateTodo ,toggleEditing ,setEditingId,setEditingText } from '../features/todo/todoSlice'
import Addtodo from './Addtodo'

function Todos() {

const todos = useSelector(state => state.todos)
let edits = useSelector((state)=> state.editingTodo) 


const dispatch = useDispatch()
  return (
<>
<div className='  text-xl font-bold text-gray-800 mx-32 my-3' >Todos</div>
<ul className='flex flex-col'>
{
todos.map((todo)=>{

return (
<li key={todo.id} className='bg-gray-200 text-xl  rounded-3xl  m-2 px-12 italic py-2  flex justify-between items-center w-300' >
{todo.text}
<div class="icons" >

<button
onClick={(e)=> {
console.log(edits);

dispatch(toggleEditing(!edits)) 
dispatch(setEditingId(todo.id))

}
}

 className="px-3 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 active:scale-95 transition mx-2">
  ✏️
</button>
<button
  onClick={(e) => dispatch(removeTodo(todo.id))}
  className=" px-3 py-1 rounded-full bg-red-500 text-white text-sm font-semibold shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg  "
>
  ✕
</button>
</div>

{/* in onclick or similar method , we can put only the references , but if we want to send some parameters with it , we will use callback function  */}
</li>
)
})
}
</ul>
</>
    
  

  )
}

export default Todos