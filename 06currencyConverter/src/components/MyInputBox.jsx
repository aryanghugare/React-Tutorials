// This component was for my practice 


import React from 'react'

function MyInputBox(
{
label,
amount ,
onAmountChange ,
onCurrencyChange ,
currencyOptions =[] , 
selectCurrency = "usd",
amountDisabled = false ,
currencyDisable = false ,
className = "",
}


) {
  return (

    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
<div className='flex flex-col' >
<label>{label}</label>


<input type="number"
 className="outline-none w-full bg-transparent py-1.5"
 value={amount}  
placeholder="Amount"
onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value)) } />
{
label=="to" ? amountDisabled=true : amountDisabled=false 
}
</div>


<div className='flex flex-col' >
 <p className="text-black/40 mb-2 w-full">Currency Type</p>
<select 
value={selectCurrency} 
onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }
 >

{
currencyOptions.map((currency)=> (
 <option key={currency} value={currency} > {currency} </option>

))

}
</select>
</div>

</div>

  )
}

export default MyInputBox