import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"

const HamburgerMenu = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
      <div className="flex md:hidden">
        {isOpen===false ?(

            <GiHamburgerMenu size={25} fill="black" onClick={()=>setIsOpen(!isOpen)}/>
        ):(
            <MdClose size={25} fill="black" onClick={()=>setIsOpen(!isOpen)}/>
        )}
      </div>
      <div className={isOpen?"fixed md:hidden w-full h-screen top-12 left-0 bg-slate-500  transition-all duration-500":"fixed md:hidden w-full h-screen top-12 left-[-100%] bg-slate-500 transition-all duration-500"}>

      </div>
    </div>
  );
};

export default HamburgerMenu;
