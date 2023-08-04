import React from 'react'

const EventPlay = ({message,name}) => {
    function handleClick(){
        console.log(message)
    }
  return (
    <>
    <button onClick={handleClick} className='bg-blue-500 px-4 py-3 cursor-pointer'>
       {name}
    </button>
    </>
  )
}

export default EventPlay