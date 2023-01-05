import React from 'react'

const Navbar = () => {
  let links = [
    {
      name:"Home",
    },
    {
      name:"IT",
    },
    {
      name:"Clothes",
    },
    {
      name:"Gadgets",
    },
    {
      name:"Contact",
    },
  ]
  return (
    <nav className='flex font-bold gap-6'>
      {links.map(link=>(
        <div className='cursor-pointer'>{link.name}</div>
      ))}
    </nav>
  )
}

export default Navbar