import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Error from './components/Error/error.jsx'


// 1st way to do the routes 
/*
const router = createBrowserRouter([
{
path: '/',
element : <Layout/>,
// This layout is used to to fix the header and footer and only change the middle part 
children : [
{
path:"",
element : <Home/>

},
{
path:"about",
element:<About/>
},
{
path:"contact",
element:<Contact/>
}
]
}
])
*/

// 2nd way to do the routes 
const router = createBrowserRouter(
// You can also , nesting inside these routes too 
// like /About/Aryan/info etc 
createRoutesFromElements(

<Route path='/' element={<Layout/>} >
<Route path='' element={<Home/>} />
<Route path='About' element={<About/>} />
<Route path='Contact' element={<Contact/>} />
<Route path='User/:userid' element={<User/>} /> 
<Route 
loader ={githubInfoLoader} // Loader is used for Api response data , basically used to optimise api calls 
path='Github'
element={<Github/>} 
/> 
<Route path='*' element={<Error/>}/> {/* This is to handle the error  */}


{/* 
// This is for my understanding 
: userid we will have the access of id in User component in User.jsx 
joo bhi userid iss url seeh aah raha hai uska access User component mein milh jayega 
for that check out User.jsx
*/}
</Route>
)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
