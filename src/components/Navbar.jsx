import React from "react";

import { links } from "../data/fakeData";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-10">
      {links.map((link) => (
        <div  className="md:cursor-pointer py-1 group" key={link.name}>
          <div className="font-bold px-4 py-2">
            {link.name}
          </div>
          <div>
            {link.submenu && (
              <div className="">
                <div className="absolute top-10 p-4 hidden group-hover:block hover:block duration-500">
                <div className="relative w-4 h-4 rotate-45 bg-white"></div>
                  <div className="grid grid-cols-4 gap-3 bg-white relative top-[-10px] left-[-30px] p-4 rounded-2xl">
                    {link.sublinks.map((sublink) => (
                      <div>
                        <div className="font-bold text-black">{sublink.head}</div>
                        <div>
                          {sublink.sublinkArray.map((item) => (
                            <div className="text-black">{item.name}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
