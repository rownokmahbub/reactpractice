import React from 'react'

const Video = ({title,id,views,chanel,verified,time}) => {
  
  

  return (
    < >
 <div className='flex flex-col container mx-auto'>

<p className='text-xl font-semibold'> {title}</p>
    <img className='h-48 object-cover' src={`https://picsum.photos/id/${id}/200/300`} alt="" />
    <p className='text-xl font-semibold'> {views}</p>
    <p>{verified && '✅'}</p>
   
    {time}
    {chanel}
    {}

  </div>
    </>
   
  )
}

export default Video