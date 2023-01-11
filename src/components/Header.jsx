import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between h-12 max-w-6xl px-5 m-auto bg-slate-400">
        <Logo />
        <Navbar />
        <Socials />
        <HamburgerMenu />
    </header>
  );
};

export default Header;
