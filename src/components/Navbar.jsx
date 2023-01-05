import React from 'react'


const Navbar = () => {
  let links = [
    {
      name:"Home",
    },
    {
      name:"IT",
      submenu:true,
      sublinks:[
        {
          head:"PC",
          sublinkArray:[
            {name:"Gaming",link:'/'},
            {name:"Work",link:'/'},
            {name:"Regular",link:'/'},
            {name:"Used",link:'/'},
          ]
        }
      ]
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
    <nav className='flex font-bold gap-2'>
      {links.map(link=>(
        <>
          <div className='cursor-pointer border-4 px-4 py-1'>{link.name}</div>
          {link.submenu && (
            <div>
              <div className='absolute top-10 border-2'>
                <div>
                  {link.sublinks.map(sublink=>(
                    <div>
                      <div>{sublink.head}</div>
                      <div>
                        {sublink.sublinkArray.map(item=>(
                          <div>
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </nav>
  )
}

export default Navbar