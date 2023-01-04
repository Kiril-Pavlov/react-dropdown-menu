import React from 'react'

import Logo from './Logo'
import Navbar from './Navbar'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='flex flex-row'>
        <Logo/>
        <Navbar/>
        <Socials/>
    </header>
  )
}

export default Header