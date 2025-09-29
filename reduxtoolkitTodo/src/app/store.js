import {configureStore} from '@reduxjs/toolkit' ; 
import todoReducer from '../features/todo/todoSlice'

export const store =  configureStore({
reducer : todoReducer 
})



// if you want to add multiple reducers
/*
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
    // add more slices here
  }
});

*/ 