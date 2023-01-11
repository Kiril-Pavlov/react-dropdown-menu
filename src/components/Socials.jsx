import React from 'react'

import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa"

const Socials = () => {
  return (
    <div className='hidden md:flex gap-2'>
      <FaFacebookSquare size={25} fill="white"/>
      <FaInstagramSquare size={25} fill="white"/>
      <FaLinkedin size={25} fill="white"/>
    </div>
  )
}

export default Socials