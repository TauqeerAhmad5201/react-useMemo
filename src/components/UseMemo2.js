import React, {useMemo, useState} from 'react'

export default function UseMemo2() {

  const [count, setCount] =useState(0); 
  const [item, setItem] = useState(10); 

  // function multiCount(){
  //   console.warn('multiCount')
  //   console.error('error')
  //   return count*5 
  // }

  let multiplication = useMemo( function multiCount(){
    console.warn('multiCount')
    console.error('error')
    return count*5 
  },[count])

  return (
    <div className="container">
      <h1>useMemo Hook in react</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <button onClick= {()=> setCount(count+1)}>Update Count</button>
      <button onClick= {()=> setItem(item+1)}>Update Item</button>
      <h2>{multiplication}</h2> 
    </div>
  )
}
