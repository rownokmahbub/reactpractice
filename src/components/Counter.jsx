import React, { useState } from 'react'

const Counter = () => {
  const [list,setList]= useState([]);
  const [item,setItem]=useState('')
   
    const addToList =()=>{
      list.push(item)
      setList( [...list])
      
    }
    const removeItem =(i)=>{
  list.splice(i,1)  
  setList([...list])  
    }
  return (
    <div className=''>
    <div className="flex items-center gap-4">
    <input className='px-4 py-2 bg-slate-700 border rounded-xl border-slate-800' type="text"  placeholder='add items' onChange={(e)=>setItem(e.target.value)}/>
        <button className='bg-green-600 px-2 py-2 rounded-xl cursor-pointer text-white' onClick={addToList}>Add List</button>
    </div>
      <div>
        {list.length!== 0 ? (
          list.map((e,i)=>{
            return(
              <div className='flex items-center justify-between px-4 py-2 my-4 rounded-xl bg-slate-800' key={i}>
            <p>{e}</p> 
            <button className='bg-red-600 px-2 py-2 rounded-xl cursor-pointer text-white' onClick={()=>{
              removeItem(i)
            }}>remove</button>
            </div>
            )
         
        
          })
        ):(<p className='flex items-center justify-between px-4 py-2 my-4 rounded-xl bg-slate-800'>No Data Available</p>)
        
        }
      </div>
    </div>
  )
}

export default Counter