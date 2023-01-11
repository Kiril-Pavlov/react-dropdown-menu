import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden">
      <div>
        {isOpen ? (
          <MdClose size={25} fill="white" onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <GiHamburgerMenu size={25} fill="white" onClick={() => setIsOpen(!isOpen)}/>
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed md:hidden w-full h-screen top-12 left-0  bg-blue-800/50 transition-all duration-500"
            : "fixed md:hidden w-full h-screen top-12 left-[-100%] bg-blue-800/50 transition-all duration-500"
        }
      ></div>
    </div>
  );
};

export default HamburgerMenu;
