import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")



  return (
    <>
  <div className="flex w-1p h-100" style={{backgroundColor:color}}>

<button className="text-white px-9 py-2 m-2 rounded-lg border-white border-4 bg-orange-500 " onClick={()=>{ setColor("Orange")} } > Orange</button>
<button className="text-white px-9 m-2 rounded-lg  border-white border-4 bg-red-500"onClick={()=>{ setColor("Red")}} >Red</button>
<button className=" text-white px-9 m-2 rounded-lg  border-white border-4 bg-green-500" onClick={()=>{ setColor("Green")}} >Green</button>
<button className="text-white px-9 m-2 rounded-lg  border-white border-4 bg-blue-500" onClick={()=>{ setColor("Blue")}}>Blue</button>
<button className=" text-white px-9 m-2 rounded-lg  border-white border-4 bg-black" onClick={()=>{ setColor("Black")}}>Black</button>
<button className="text-white px-9 m-2 rounded-lg  border-white border-4 bg-yellow-500"onClick={()=>{ setColor("Yellow")}} >Yellow</button>



</div>
    </>
  )
}

export default App
