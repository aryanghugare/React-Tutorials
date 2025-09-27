import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App,Gay} from './App.jsx'

const anotherElement = 
(
<a href='https://google.com'>Click me </a>
)

const reactElement = React.createElement(
'a' , // Tag 
{href :'https://google.com' }   // Object

)

createRoot(document.getElementById('root')).render(

anotherElement
 
)

// This is added by me 

createRoot(document.getElementById('root1')).render(
 
     <App />



 
)
