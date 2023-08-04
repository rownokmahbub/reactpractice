import React from 'react'

const RenderEvents = () => {
   
  return (
    <div className='flex flex-col justify-center gap-10 items-center'>
            <p> <p className='text-2xl font-semibold capitalize'>here we learn events </p></p>
            <AlterButton movieName='kiki start'>
              
            </AlterButton>
     
    </div>
  )
}

export default RenderEvents

function Button({onClick,children}){
    return(
        <button className='bg-purple-600 px-4 py-2 text-white rounded-full hover:bg-purple-900' onClick={onClick}>
            {children}
        </button>
    )
}
function AlterButton({movieName}){
    function handleClick(){
        alert(`'Play' ${movieName}`)
    }
    return(
        <Button onClick={handleClick}>
        Play "{movieName}"
      </Button>
    )
}
