import React from 'react'
import HamburgerMenu from './HamburgerMenu'

import Logo from './Logo'
import Navbar from './Navbar'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='flex flex-row items-center justify-between h-12 px-5 bg-slate-400'>
        <Logo/>
        <Navbar/>
        <Socials/>
        <HamburgerMenu/>
    </header>
  )
}

export default Header