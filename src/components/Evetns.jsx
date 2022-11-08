import React from 'react'
import { useState } from 'react'

export default function Events() {
    const[count, setcount] = useState(0)
  return (
    <div>
        <h3>{`The count is ${count}`}</h3>
        <button onClick={()=>setcount(count + 1)}> Incremenet(Action) </button>
    </div>
  )
}
