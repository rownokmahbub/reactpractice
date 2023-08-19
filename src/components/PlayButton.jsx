import React, { useState } from 'react'

export default function PlayButton({message,children,onPlay,onPause}) {
    const [playing, setPlaying] = useState(false);  
    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }
  return (
   
         <button className='bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-900 text-white mt-2 shadow-lg' onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}
        </button>
 
  )
}
