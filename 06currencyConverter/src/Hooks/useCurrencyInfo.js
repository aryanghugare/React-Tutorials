import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

// This is using the .then and .catch 
const [data,setData] = useState({})
useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
`)
.then((res)=>res.json())
.then((res)=> setData(res[currency]))
.catch((err)=>console.log("There is an error in the api" , err))
},[currency])

return data 

// console.log(data );
// const [data, setData] = useState({});


//  useEffect(()=>{
//  async function fetchData() {
//       try {
//         const response = await fetch(
//           `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//         );
//         const res = await response.json();
//         setData(res[currency]);
//       } catch (error) {
//         console.log("There is an error in the api", error);
//       }
//     }

//     fetchData();

// },[currency])

// return data ;
}


export default useCurrencyInfo;