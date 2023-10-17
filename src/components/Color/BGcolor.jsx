import React, { useState } from 'react'

const BGcolor = () => {
    const [color ,setColor] = useState("Olive")
  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex justify-center gap-3 shadow-xl bg-white px-10 py-4 rounded-full">
            <button onClick={()=> setColor('red')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-red-300' style={{backgroundColor : "red"}}>Red</button>
            <button onClick={()=> setColor('green')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-green-300' style={{backgroundColor : "green"}}>Green</button>
            <button onClick={()=> setColor('blue')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-blue-300' style={{backgroundColor : "blue"}}>Blue</button>
            <button onClick={()=> setColor('olive')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-olive-300' style={{backgroundColor : "olive"}}>Olive</button>
            <button onClick={()=> setColor('gray')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-gray-300' style={{backgroundColor : "gray"}}>Gray</button>
            <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-2 rounded-full text-black shadow-xl focus:ring-4 ring-yellow-300' style={{backgroundColor : "yellow"}}>Yellow</button>
            <button onClick={()=> setColor('pink')} className='outline-none px-4 py-2 rounded-full text-black shadow-xl focus:ring-4 ring-pink-300' style={{backgroundColor : "pink"}}>Pink</button>
            <button onClick={()=> setColor('purple')} className='outline-none px-4 py-2 rounded-full text-white shadow-xl focus:ring-4 ring-purple-300' style={{backgroundColor : "purple"}}>Purple</button>
            <button onClick={()=> setColor('lavender')} className='outline-none px-4 py-2 rounded-full text-black shadow-xl focus:ring-4 ring-lavender-300' style={{backgroundColor : "lavender"}}>Lavender</button>
            <button onClick={()=> setColor('white')} className='outline-none px-4 py-2 rounded-full  text-white shadow-xl focus:ring-4 ring-slate-700' style={{backgroundColor : "black"}}>Black</button>
        </div>
        </div>
    </div>
  )
}

export default BGcolor