import React, { useState } from 'react'

const Form = ({status}) => {
    const [form,setForm] =useState()
    
   function handleChange(e){
    console.log(e.target.value)
   }
   function handleSubmit(e){
    console.log(e.target.value)
   }
  return (
    <div>
        <form className='flex flex-col gap-5 items-center' action="">
            <input name='firstname' className='bg-slate-700 p-2 rounded-lg' type="text" placeholder='first name' onChange={handleChange}/>
            <input name='lastname' className='bg-slate-700 p-2 rounded-lg'  type="text" placeholder='last name' onChange={handleChange}/>
              <button className='bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-900'  onSubmit={handleSubmit}>
           submit Here
        </button>
        </form>
    </div>
  )
}

export default Form