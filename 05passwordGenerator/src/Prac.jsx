// This is a practice file , I have written this code again to understand it better

import React, {useState} from 'react'
import { useEffect,useCallback } from 'react';


function Prac() {
const[length,setLength]=useState(8);
const[password,setPassword]=useState("");
const[includeNumbers,setIncludeNumbers]=useState(false);
const[includeSymbols,setIncludeSymbols]=useState(false);
const passwordRef = React.useRef(null);
const buttonRef = React.useRef(null);

const passwordGenerator = useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
if(includeNumbers) str += "0123456789"
if(includeSymbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="


// Through this for loop , we are generating random index value which is less than str.length 
for (let i = 1; i <=length; i++) {
  let char = Math.floor(Math.random() * str.length + 1) 
  pass+=str.charAt(char);
}
setPassword(pass)
}, [length,includeNumbers,includeSymbols,setPassword]) 




useEffect(()=>{
buttonRef.current.classList.remove("bg-white")

buttonRef.current.innerText=`Copy`
passwordGenerator()
},[length,includeNumbers,includeSymbols])


const copytoClipboard = useCallback(()=> {
buttonRef.current.classList.add("bg-white")
passwordRef.current.select();
buttonRef.current.innerText=`Copied`
navigator.clipboard.writeText(passwordRef.current.value);

console.log(passwordRef.current.classList);



},[password,includeNumbers,includeSymbols])




  return (
   <>
<div className="w-2/3 bg-blue-100 ">
<div className='w-full flex justify-center items-center h-20 text-white text-xl '>
<input className='bg-amber-100 text-black rounded-lg w-2/3 ' type="text" value={password} ref={passwordRef} readOnly />
<button className='bg-blue-600 rounded-lg text-black p-2 m-2' onClick={copytoClipboard} ref={buttonRef} >Copy</button>
</div>

<div className='w-full flex  justify-center items-center h-40 text-white text-xl gap-5 '>
<input type="range" min='8' max="100"  value={length} onChange={(e)=> setLength((e.target.value))} />
Length({length})
<input type="checkbox" defaultChecked={includeNumbers} onChange={(e)=> setIncludeNumbers((prev)=> !prev ) } />Numbers
<input type="checkbox" defaultChecked={includeSymbols} onChange={(e)=>setIncludeSymbols((prev)=> !prev)} />Symbols


</div>




</div>


</>
  )
}

export default Prac