import React from 'react'
const Video = ({title,image,views,chanel,verified,time,children,dispatch,id,editVideo}) => {
  
  

  return (
    <>
 <div className='flex relative flex-col container mx-auto bg-white px-5 py-5 rounded-xl shadow-xl'>

    <button className='rounded-full p-1.5 bg-red-400 absolute -right-2 -top-2 text-white cursor-pointer' onClick={()=> dispatch({type:'DELETE',payload:id})}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>

    <img className='h-48 object-cover rounded-xl' src={image} alt={title} />
    <div className="flex justify-between items-center mt-3">
    <p className='text-lg font-semibold'> {title}</p>
    <p>  {time}
   </p>
    </div>
   
    
    <div className="flex justify-between items-center">
    <div className="flex gap-2 items-center">
    {chanel}
    <p>{verified && '✅'}</p>
    </div>
    <p className='text-sm text-gray-400 font-semibold'> {views}</p>
    </div>
    {children}
    <button className='bg-green-600 px-4 py-2 rounded-full hover:bg-green-900 text-white mt-2 shadow-lg' onClick={()=>editVideo(id)}>Edit Post
        </button>
  </div>
    </>
   
  )
}

export default Video