// my try to create a custom Hook 

import { useEffect ,useState} from "react";



function useMine(currency){
const [data,setData] = useState({})

useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((res)=> res.json())
.then((data)=>setData(data[currency]))



},[currency])
return data ;

}



export default useMine ;