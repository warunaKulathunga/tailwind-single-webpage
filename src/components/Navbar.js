import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import APPString from "./../APPString";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        {APPString.navbar.header}
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">{APPString.navbar.home}</li>
        <li className="p-4">{APPString.navbar.company}</li>
        <li className="p-4">{APPString.navbar.resources}</li>
        <li className="p-4">{APPString.navbar.about}</li>
        <li className="p-4">{APPString.navbar.contact}</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500  md:hidden"
            : "ease-in-out duration-500 fixed left-[-100%]  md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          {APPString.navbar.header}
        </h1>
        <li className="p-4 border-b border-gray-600">
          {APPString.navbar.home}
        </li>
        <li className="p-4 border-b border-gray-600">
          {APPString.navbar.company}
        </li>
        <li className="p-4 border-b border-gray-600">
          {APPString.navbar.resources}
        </li>
        <li className="p-4 border-b border-gray-600">
          {APPString.navbar.about}
        </li>
        <li className="p-4">{APPString.navbar.contact}</li>
      </ul>
    </div>
  );
};

export default Navbar;
