import React from 'react'
import Video from '../components/Video'
import videos from '../components/data/videosdata'
const VideosPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center container mx-auto  py-10'>
        {videos.map((video)=>(
 <Video title={video.title} views={video.views} time ={video.time} chanel={video.channel} verified={video.verified}/>
        ))}
       
    </div>
  )
}

export default VideosPage