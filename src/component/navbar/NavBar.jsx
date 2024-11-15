import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className='flex w-full item-center justify-between px-7 py-6'>
      <Logo/>
      <Menu/>
    </div>
  )
}

export default NavBar
