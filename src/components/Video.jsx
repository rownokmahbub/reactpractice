import React from 'react'
const Video = ({title,id,views,chanel,verified,time}) => {
  
  

  return (
    <>
 <div className='flex flex-col container mx-auto bg-white px-5 py-5 rounded-xl shadow-xl'>


    <img className='h-48 object-cover rounded-xl' src={`https://picsum.photos/id/1/200/300`} alt={title} />
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
   
  
   
  
   

  </div>
    </>
   
  )
}

export default Video