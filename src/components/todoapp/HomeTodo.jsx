import React, { useState } from 'react'
import ToodoCreate from './ToodoCreate'

const HomeTodo = () => {
    const [todos,setTodo]= useState([
        {
            'title' : 'first todo',
            'status': 'Pending'
        },
        {
            'title' : '2nd todo',
            'status': 'Done'
        },
        {
            'title' : '3rd todo',
            'status': 'Done'
        },
    ])
    const addTodo = (todo) => {
        let newTodos = todos.slice(); // Change this line
        newTodos.unshift(todo);
        setTodo(newTodos); // Change this line
    };
  return (
    <div className='container mx-auto'>

<ToodoCreate onCreateTodo={todo => addTodo(todo)}/>
        {todos.map((item,i)=>(
 <div key={i} className="flex justify-between items-center bg-slate-700 shadow-xl rounded-md border border-slate-600 my-5 px-5 py-3 text-white">
 <p>{item.title}</p>
 <div className="flex items-center gap-2">
     <div className="bg-green-600 hover:bg-green-700 cursor-pointer p-3 rounded-lg">
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
     </div>
     <div className="bg-red-600 hover:bg-red-700 cursor-pointer p-3 rounded-lg">
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
     </div>
 </div>
 </div>
        ))}
       
        

    </div>
  )
}

export default HomeTodo