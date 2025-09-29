import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
todos : [{id :1 , text: "Code" }],
editingTodo : false ,
editingtemp : {id : null, text:" "}
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



toggleEditing: (state, action) => {
  state.editingTodo = action.payload;   // payload is true or false
},


setEditingId: (state, action) => {
    state.editingtemp.id = action.payload;
  },

setEditingText: (state, action) => {
    state.editingtemp.text = action.payload;
  },



updateTodo : (state)=>{
const {id , text } = state.editingtemp ;
console.log(id);
console.log(text);

//  state.todos.find((todo)=>todo.id===id).text = text ;
const todo = state.todos.find((t) => t.id === id);
console.log(todo);

  if (todo) {
    todo.text = text;
  }

  state.editingtemp = { id: null, text: "" };
},


}

})
export const {addTodo,removeTodo,updateTodo,toggleEditing,setEditingId,setEditingText} = todoSlice.actions
// this is action creator function that will be used in the components


export default todoSlice.reducer // This is the reducer function that will be used in the store