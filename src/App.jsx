import React, { useRef } from 'react'

import LoadParent from './component/Loading/LoadParent'
import Home from './component/Landing/Home'
import Card from './component/Card/Card'
import Footer from './component/footer/Footer'



const App = () => {

  return (
    <>
   
    <div className='h-screen bg-[#111] overflow-hidden'>
    <LoadParent/>
<Home/>

    </div>
    <div>  

      <Card/>
    </div>
<Footer/>
    </>
  )
}

export default App
