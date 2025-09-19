import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from "react-router-dom";


function Github() {
// This is the way of loading using loader in the routes 
const data = useLoaderData()



// This is the second way of loading the data from the api 

/*
  const [data, setData] = useState([]);
useEffect(()=>{
fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=> res.json())
.then((res)=> setData(res))

},[])
*/

  return (
<>
    <div className='text-center m-4 bg-gray-500 text-white text-2xl'>Github
<div className='text-center'> Github Followers :{data.followers} </div>
<img src={data.avatar_url} alt="" />
</div>
</>
  )
}

export default Github

export const githubInfoLoader = async () => {
const response  = await fetch('https://api.github.com/users/hiteshchoudhary')
return response.json()
}