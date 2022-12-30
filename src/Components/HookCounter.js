import React, { useState } from 'react'
import CounterStyle from './CounterStyle.css'

function HookCounter() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

  return (
    <div className = 'counter'>
       <h2 className={
        count > 0 ? 'positive' : 
        count < 0 ? 'negative' : null
        }>{count}</h2>

    <div className='counterBtn'>
    <button onClick={()=> setCount(prevCount => prevCount+1)}>+</button>
    <button onClick={()=> setCount(prevCount => prevCount-1)}>-</button>
    </div>
    
      <button className = "resetBtn" onClick={()=> setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default HookCounter