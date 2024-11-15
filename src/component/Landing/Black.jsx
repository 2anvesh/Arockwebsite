import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";

const Black = () => {
    const BlackRef = useRef(null)
    useGSAP(()=>{
        gsap.to(BlackRef.current,{
          y:"-100%",
          delay:1.8,
          duration:1
        })
       
      })
  return (
    
       <div ref={BlackRef} className='h-screen bg-[#111] w-full z-20 fixed'>

</div>

  )
}

export default Black
