import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { links } from "../data/fakeData";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

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
            <div
              className="flex items-center justify-between h-16 mx-5  border-b-2 border-sky-300/25"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              <div className="font-bold text-2xl">{link.name}</div>
              {link.submenu && (
                <div  className="font-bold text-2xl">
                  {heading === link.name ? <BsChevronUp /> : <BsChevronDown />}
                </div>
              )}
            </div>
            {link.submenu && (
              <div
                className={`
                ${heading === link.name ? "md:hidden" : "hidden"}
              `}
              >
                {link.sublinks.map((sublink) => (
                  <div key={sublink.head}>
                    <div>
                      <div
                        className="flex items-center justify-between h-8 mx-10  border-b-2 border-sky-300/25"
                        onClick={() =>
                          subHeading !== sublink.head
                            ? setSubHeading(sublink.head)
                            : setSubHeading("")
                        }
                      >
                        {sublink.head}
                        <div>
                          {subHeading === sublink.head ? (
                            <BsChevronUp />
                          ) : (
                            <BsChevronDown />
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        subHeading === sublink.head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {sublink.sublinkArray.map((sublinkItem) => (
                        <div className="mx-20 text-center border-b-2 border-sky-300/25">{sublinkItem.name}</div>
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
