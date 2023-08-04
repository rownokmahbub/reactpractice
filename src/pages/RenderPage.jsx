import React from 'react'
import RenderList from '../components/renderlist/RenderList'

const renderlist = () => {
  return (
    <div className='container mx-auto bg-slate-900 text-white px-20 py-20 flex flex-col gap-10 justify-center items-center'>
    <RenderList/>
    </div>
  )
}

export default renderlist