import React from 'react'

import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa"

const Socials = () => {
  return (
    <div className='flex gap-2'>
      <FaFacebookSquare size={25} fill="black"/>
      <FaInstagramSquare size={25} fill="black"/>
      <FaLinkedin size={25} fill="black"/>
    </div>
  )
}

export default Socials