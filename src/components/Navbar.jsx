import React from "react";

const Navbar = () => {
  let links = [
    {
      name: "Home",
    },
    {
      name: "IT",
      submenu: true,
      sublinks: [
        {
          head: "PC",
          sublinkArray: [
            { name: "Gaming", link: "/" },
            { name: "Work", link: "/" },
            { name: "Regular", link: "/" },
            { name: "Used", link: "/" },
          ],
        },
        {
          head: "Monitors",
          sublinkArray: [
            { name: "Gaming", link: "/" },
            { name: "Work", link: "/" },
            { name: "Regular", link: "/" },
            { name: "Used", link: "/" },
          ],
        },
        {
          head: "Phones",
          sublinkArray: [
            { name: "Android", link: "/" },
            { name: "IOS", link: "/" },
            { name: "Other", link: "/" },
          ],
        },
        {
          head: "Printers",
          sublinkArray: [
            { name: "Color", link: "/" },
            { name: "Black and White", link: "/" },
            { name: "Industry", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Clothes",
    },
    {
      name: "Gadgets",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <nav className="flex gap-5">
      {links.map((link) => (
        <div  className="md:cursor-pointer px-4 py-1 text-left font-bold hover:bg-slate-50 group">
          <div>
            {link.name}
          </div>
          <div>
            {link.submenu && (
              <div className="">
                <div className="absolute top-10 bg-orange-300 p-3 hidden group-hover:block hover:block">
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
