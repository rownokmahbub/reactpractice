import React from 'react'
import RenderEvents from '../components/interactivity/RenderEvents'

const EventPage = () => {
  return (
    <div className='container mx-auto bg-zinc-900 text-white px-20 py-20 flex flex-col gap-10 justify-center items-center'>
        <RenderEvents/>
    </div>
  )
}

export default EventPage