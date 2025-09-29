import React from 'react';
import UserContext from './UserContext';
import { useState } from 'react';


// user is for the value which is already present in the store 
// setUser is to update or add the values in the store , basically for CRUD operation 
// similar to useDispatch() and useSelector() in redux 
// Here under the value of ....  <UserContext.Provider value={{user,setUser}}>
// we can many methods or variables like user , setUser 

const UserContextProvider = ({children})=> {
const[user,setUser] = useState(null)
return (
<>
<UserContext.Provider value={{user,setUser}}>
{children}
</UserContext.Provider>

</>
)
}

export default UserContextProvider