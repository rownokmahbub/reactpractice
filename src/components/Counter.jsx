import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)

    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
        <p>{count}</p>
        <button className='bg-green-600 px-2 py-3 text-white' onClick={handleClick}>Click</button>
    </div>
  )
}

export default Counter