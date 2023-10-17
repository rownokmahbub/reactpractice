import React, { useState } from 'react'

const Form = () => {
    let [form,setForm] =useState({
      fName:'',
      lName:'',
      city:'',
      gender:'male'
    })
    
   const  handleChange=(property,value)=>{
    setForm(prevObj =>({
      ...prevObj,
      [property]:value
    }))
   }
   function handleSubmit(e){
    console.log(e.target.value)
   }
  return (
    <div>
        <form className='flex flex-col gap-5 items-center max-w-xl' action="">
            <input value={fromJSON.fName} name='firstname' className='bg-slate-700 px-4 py-3 rounded-lg' type="text" placeholder='first name' onChange={handleChange}/>
            <input value={form.lName} name='lastname' className='bg-slate-700 px-4 py-3 rounded-lg'  type="text" placeholder='last name' onChange={handleChange}/>
            <select value={form.city} className='bg-slate-700 px-4 py-3 w-full rounded-lg' name="" id="">
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Barishal">Barishal</option>
            </select>
            <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 bg-slate-700 px-4 py-3 rounded-lg">
            <input checked={form.gender=== 'male'} name='gender' className='bg-slate-700 px-4 py-3 rounded-lg'  type="radio" placeholder='last name' onChange={handleChange}/>Male
            </div>
            <div className="flex items-center gap-3 bg-slate-700 px-4 py-3 rounded-lg">
            <input checked={form.gender==='female'} name='gender' className='bg-slate-700 px-4 py-3 rounded-lg'  type="radio" placeholder='last name' onChange={handleChange}/>Female
            </div>
            </div>
          
           
              <button className='bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-900'  onSubmit={handleSubmit}>
           submit Here
        </button>
        </form>
    </div>
  )
}

export default Form