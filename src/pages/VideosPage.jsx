import React, { useContext, useReducer, useState } from 'react'
import Video from '../components/Video'
import videoDB from '../components/data/videosdata'
import PlayButton from '../components/PlayButton'
import AddVideo from '../components/AddVideo'
import ThemeContext from '../components/context/ThemeContext'
const VideosPage = () => {
  const [editableVideo,setEditable]= useState(null);
  const [videos,dispatch] = useReducer(videoReducer,videoDB)
  const themeContext = useContext (ThemeContext)
  
  function videoReducer(videos,action){
    switch(action.type){
      case 'add':
      return [
        ...videos,
      {...action.payload, id: videos.length+1}
      ]
      case 'DELETE':
        return  videos.filter(video=>video.id!==action.payload)
        case 'UPDATE':
          const index= videos.findIndex(v=>v.id==action.payload.id)
  const newVideos =[...videos]
  newVideos.splice(index,1,action.payload)
  setEditable(null)
  return newVideos
      default :
      return videos
    }
  }
  // const [videos,setVideos]= useState(videoDB);

 
function editVideo(id){
  setEditable(videos.find(video=>video.id==id))
 
  
}

  return (
    <div className='container mx-auto py-10'>
      
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9 items-center'>
        {videos.map((video)=>(
 <Video className={`dark ${themeContext}`} key={video.id} id={video.id} title={video.title} views={video.views} time ={video.time} chanel={video.channel} verified={video.verified} image={video.image} dispatch={dispatch} editVideo={editVideo} > 
 
   <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
 </Video>
 
        ))}
       
    </div>
    </div>

  )
}

export default VideosPage