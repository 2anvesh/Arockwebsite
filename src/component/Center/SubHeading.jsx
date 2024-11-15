import React from 'react'
import 'remixicon/fonts/remixicon.css'
const SubHeading = () => {
  return (
    <div className='flex
    relative -mt-20 justify-between items-center uppercase text-sm p-2 text-white '>
     <div  className='flex gap-10 p-2'>
    
     <h3>Play <br/> the film</h3>
     <i className="ri-play-fill  text-xl border-2 rounded-full px-2 py-1 cursor-pointer m-2 "></i>

     </div>
     <div className='flex gap-10 uppercase text-sm'>
     <h3>Creater <br/>curator</h3>
     <h3>New York <br/>los angeles</h3>
     </div>
    </div>
  )
}

export default SubHeading
