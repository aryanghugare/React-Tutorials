import { createContext, useContext } from "react";

export const TodoContext = createContext({
todos : [
{
id : 1,
todo:"Todo message",
completed : false 
}
],

addTodo: (todo)=>{},
updatedTodo : (id,todo)=>{}, // This method can also be updateTodo
deleteTodo : (id)=>{},
toggleCompleted : (id)=>{},
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
return useContext(TodoContext)
}

