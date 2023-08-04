import React from 'react'

const RenderList = () => {
    const people = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        
      }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
       
      }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        
      }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        
      }, 
      , {
        id: 4, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        
      }, {
        id: 5, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
       
      }];
  return (
    <>
    <p className='text-2xl font-semibold capitalize'>here we learn conditional rendering</p>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      
      {people.map((people)=>
<div key={people.id} className="flex flex-col gap-2 bg-slate-700 px-4 py-4 rounded-xl">
      <p className='text-base font-semibold'>{people.id}</p>
      <p className='text-base font-semibold'>Your Name : {people.name}</p>
      <p className='text-base font-semibold'>Your Profession : {people.profession}</p>
      <p className='text-base font-semibold'>Your Accomplishment : {people.accomplishment}</p>
</div>
      )}
     
  </div>
    </>
 
  )
}

export default RenderList