import { useState,useEffect,useRef} from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length , setLength ] = useState(8);
const[numberAllowed,setNumberAllowed] = useState(false )
const[charAllowed, setCharAllowed] = useState(false)
const[password,setPassword] = useState("")
// all these setters for eg:setLength,setPassword requires callback function 


const passwordGenerator = useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
if(numberAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="


// Through this for loop , we are generating random index value which is less than str.length 
for (let i = 1; i <=length; i++) {
  let char = Math.floor(Math.random() * str.length + 1) 
  pass+=str.charAt(char);
}
setPassword(pass)
}, [length,numberAllowed,charAllowed,setPassword])  /// This inside [] are dependencies , whenerver there will be changes inside this 
// useCallback will be called again
// useCallback is used for optimization 
// here we have used setPassword , because if i have used password is changing continously ,
// so it will call this method continously (look at react one shot 5:09:00)





// whenever there will be changes , useEffect is used 
useEffect(()=>{
passwordGenerator()
buttonRef.current.classList.remove("bg-white")
buttonRef.current.innerText=`Copy`

},[length , numberAllowed,charAllowed,passwordGenerator])  /// Whenever there will be changes in these dependencies


// My method to copy the password which is generated to the clipboard 
// I have used onClick method on a button , then passed this function as callback 
const copySome = () => {

password && navigator.clipboard.writeText(password);
alert("copied to clipboard")
}


// useRef hook 
const passwordRef = useRef(null)
const buttonRef = useRef(null)

// Here using callBack is not necessary , the callBack is used for optimization purpose 
const copyPasswordtoClipboard = useCallback(()=>{

passwordRef.current.select() ;  // this line is used give the effect of selecting the password 
// passwordRef.current.setSelectionRange(0,9) // this is also method , not here tho 
buttonRef.current.classList.add("bg-white")
buttonRef.current.innerText=`Copied`
window.navigator.clipboard.writeText(password)

},[password])


// Without callback 
// const copyPasswordtoClipboard = ()=>{
// window.navigator.clipboard.writeText(password)
// alert("Password is copied to clipboard ")
// }

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-700 py-2  main'  >

<h1 className='text-center text-white mb-2'>Password Generator </h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4  ' >

<input type="text"
value= {password}
className='outline-none w-full py-1 px-3  bg-white'
placeholder='Password'
readOnly 
ref={passwordRef}
 />  

<button className='bg-black rounded-md p-2 copyBtn' onClick={copyPasswordtoClipboard} ref= {buttonRef} >Copy</button>
</div>
<div className='flex text-sm gap-x-2 '>
<div className='flex items-center gap-x-1'>
<input 
type="range" 
min={8} max={100}
value={length}
onChange={(e)=> setLength(e.target.value)}
/>
<label > Length : {length}</label>
</div>
<div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={numberAllowed}
onChange={(e)=> setNumberAllowed((prev)=>!prev) }
/>
<label > Number </label>
</div>


<div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={numberAllowed}
onChange={(e)=> setCharAllowed((prev)=>!prev) }
/>
<label > Characters </label>
</div>


</div>


</div>
    
    </>
  )
}

export default App
