import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card  from './components/Card'
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

function App() {
  const [count, setCount] = useState(0)
const obj = {
arya : "arya"
}

let names = ['aryan','aditya','rijul']
  return (
<>
<h1>Here we are</h1>
{ names.map((name) => {

return <Card username = {name}/>
})}


{/* <Card username = "Aryan" /> */}
</>

  )
}

export default App
