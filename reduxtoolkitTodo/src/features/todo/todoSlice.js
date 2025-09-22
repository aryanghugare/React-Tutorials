import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
todos : [{id :1 , text: "Code" }]
}







export const todoSlice = createSlice({
name : 'todo',
initialState ,    // I have this method on line number 3 
reducers : {
addTodo : (state,action)=> {
const todo = {
id : nanoid(),
text : action.payload    // So payload is the data that can we send , it can be object etc , basically its an input 
}
state.todos.push(todo)
},
removeTodo : (state,action)=> {
state.todos = state.todos.filter((todo)=>todo.id !== action.payload )
},

updateTodo : (state,action)=>{
// state.todos.find((todo)=>todo.id===action.payload.id).text = action.payload.text 
const toupdateTodo = state.todos.find((todo)=>todo.id===action.payload);

}

}

})






export const {addTodo,removeTodo,updateTodo} = todoSlice.actions


export default todoSlice.reducer