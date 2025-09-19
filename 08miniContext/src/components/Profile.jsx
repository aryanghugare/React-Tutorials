
import UserContext from '../context/UserContext'
import React,{useState,useContext} from 'react'


function Profile() {
const {user} = useContext(UserContext)

if(!user) return <div>Please Login </div>
return <div>Welcome {user.username}</div>
}

export default Profile


// In this code , we are learning to access the data through 'user' in UserContext 