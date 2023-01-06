import React from "react";

import { links } from "../data/fakeData";

const Navbar = () => {
  
  return (
    <nav className="flex gap-10">
      {links.map((link) => (
        <div  className="md:cursor-pointer py-1 hover:bg-slate-50 group">
          <div className="font-bold px-4">
            {link.name}
          </div>
          <div>
            {link.submenu && (
              <div className="">
                <div className="absolute top-10 bg-orange-300 p-4 hidden group-hover:block hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    {link.sublinks.map((sublink) => (
                      <div>
                        <div className="font-bold">{sublink.head}</div>
                        <div>
                          {sublink.sublinkArray.map((item) => (
                            <div>{item.name}</div>
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
