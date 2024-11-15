import React from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

const MenuPage = () => {
  return (
    <div className='fixed h-screen w-full bg-[linear-gradient(#1A1A1A,#1A1A1A)] top-0 z-50'> 
     <MenuLeft/>
     <MenuRight/>
      
    </div>
  )
}

export default MenuPage
