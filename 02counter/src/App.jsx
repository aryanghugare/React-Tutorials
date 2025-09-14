import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

const [counter,setCounter ] =useState(15) // counter is the varaible name , and setCounter is the function which 
// performs some operation on this variable (counter )


//   let counter = 13 ;

const addValue = () => {
// counter = counter + 1;
console.log(counter);
if(counter==20) return 
setCounter(counter + 1); // here we are using the setCounter function to update the value of counter variable
}

const reduceValue = () => {
if(counter==0) return 
setCounter(counter-1)
}

  return (
    <>
     <h1>welcome here </h1>
<h2>counter value : {counter} </h2>

<button onClick={addValue} >Add value {counter} </button>
<br />
<button onClick={reduceValue} >remove value {counter} </button>
    </>
  )
}


export default App
