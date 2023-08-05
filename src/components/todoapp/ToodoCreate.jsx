import React, { useState } from 'react'

const ToodoCreate = ({onCreateTodo}) => {
    const [title, setTitle] = useState('');

    const createTodo = () => {
        if (title.length > 0) {
            const todo = {
                title,
                status: 'Pending'
            };
            onCreateTodo(todo);
            setTitle('');
        }
    };
   
  return (
    <div>
        <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-slate-900 sr-only dark:text-white">Add Todo</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </div>
        <input type="text" id="default-search" className="block w-full p-5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add todo here..."  value={title}
                onChange={e => setTitle(e.target.value)}/>
        <button onClick={e=>createTodo()} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>
    </div>
</form>
    </div>
  )
}

export default ToodoCreate