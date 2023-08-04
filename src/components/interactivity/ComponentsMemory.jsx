import { useState } from 'react'
import {data} from '../data/data'
export default function ComponentsMemory(){
    const [index,setIndex] = useState(0);
    const [show ,setShow]= useState(false)
    function handleClick(){
        setIndex(index +1)
    }
    function handleShow(){
        setShow(!show)
    }
    let imagedata = data[index]
    return(
        <>
        <div>
            <p>{imagedata.name}</p>
            <p>{imagedata.artist}</p>
        </div>
        <img className='h-56' src={imagedata.url} alt={imagedata.alt} />
        <p>({index +1} of {data.length})</p>
        {show && <p className='text-sm w-96 mx-auto'>{imagedata.description}</p>}

        <button className='bg-purple-600 px-4 py-2 text-white rounded-full hover:bg-purple-900' onClick={handleClick}>
            next
        </button>
        <button className='bg-teal-600 px-4 py-2 text-white rounded-full hover:bg-teal-900' onClick={handleShow}>
            {show ? 'hide' : 'Show'}
        </button>
        </>
    )
}