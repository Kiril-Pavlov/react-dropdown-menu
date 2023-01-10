import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  return (
    <div>
      <div className="flex md:hidden">
        <GiHamburgerMenu size={25} fill="black" />
      </div>
      <div className="fixed md:hidden w-full h-52 top-12 left-0 bg-slate-500">

      </div>
    </div>
  );
};

export default HamburgerMenu;
