import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const LoadChild = () => {
    const lineRef = useRef(null);
const tl=gsap.timeline()
  useGSAP(()=>{
    tl.to(lineRef.current, {
        width: "100%",
        duration: 2,
        delay: 1,
        ease:"expo.out"
    })
    .to(lineRef.current,{
      opacity:0
    })
  })

    return (
        <div ref={lineRef} className='w-0 h-full bg-white'>
           
        </div>
    );
}

export default LoadChild;

