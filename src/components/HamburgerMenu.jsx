import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { links } from "../data/fakeData";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");
  return (
    <div className="flex md:hidden">
      <div>
        {isOpen ? (
          <MdClose size={25} fill="white" onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <GiHamburgerMenu
            size={25}
            fill="white"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed md:hidden w-full h-screen top-12 left-0  bg-blue-800/50 transition-all duration-500"
            : "fixed md:hidden w-full h-screen top-12 left-[-100%] bg-blue-800/50 transition-all duration-500"
        }
      >
        {links.map((link) => (
          <div key={link.name}>
            <div className="font-bold" 
              onClick={() => heading !==link.name ? setHeading(link.name) : setHeading("")}>
              {link.name}
            </div>
            {link.submenu && (
              <div
                className={`
                ${heading === link.name ? "md:hidden" : "hidden"}
              `}
              >
                {link.sublinks.map((sublink) => (
                  <div>
                    <div>
                      <div className="px-6">{sublink.head}</div>
                    </div>
                    <div>
                      {sublink.sublinkArray.map((sublinkItem) => (
                        <div className="px-12">{sublinkItem.name}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
