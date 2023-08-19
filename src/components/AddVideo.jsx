import React, { useEffect, useState } from "react";

export default function AddVideo({ dispatch,editableVideo }) {
    const initialState={
        time: "1 year ago",
    channel: "Nafiz Coder",
    title: '',
    views: ''
    }
  const [video, setVideo] = useState(initialState);
  function handleChange(e) {

    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        dispatch({type:'UPDATE',payload:video})
    }
    else{
        dispatch({type:'add',payload:video})
    }
   
    setVideo(initialState)

  }
  useEffect(() => {
  if(editableVideo){
    setVideo(editableVideo)
  }

    
  }, [editableVideo])
  
  return (
    <div>
      <form className="flex flex-col gap-5">
        <input
          className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-lg shadow-slate-50"
          type="text"
          name="title"
          placeholder="Write title here ..."
          onChange={handleChange} value={video.title}
        />
        <input
          className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-lg shadow-slate-50"
          type="text"
          name="views"
          placeholder="Write Views here ..."
          onChange={handleChange} value={video.views}
        />
        <div className="flex justify-end items-center">
          <button
            className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-900 text-white my-5 shadow-lg"
            onClick={handleSubmit}
          >
            {editableVideo? 'Edit Video' : 'Add Video'}
          </button>
        </div>
      </form>
    </div>
  );
}
