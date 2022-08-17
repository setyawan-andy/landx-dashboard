import React from "react";
import Image from "next/image";

import { BsFillBellFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const Header = ({ setSearch }) => {
  return (
    <div className="bg-[#FFFFFF] px-8 py-5 shadow-sm flex justify-between items-center">
      <div className="text-xl font-semibold hidden md:block">Users</div>
      <div className="flex gap-6 justify-center items-center">
        <div className="relative ml-12 md:ml-0">
          <input
            type="text"
            className="border w-64 border-gray-200 rounded-md py-2 px-4 focus:outline-gray-300 text-xs text-gray-700"
            placeholder="Search by name, username, email"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearch
            className="absolute top-2 right-2 text-gray-400"
            size={20}
          />
        </div>
        <div>
          <BsFillBellFill
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer md:block hidden"
          />
        </div>
        <div>
          <FaEnvelope
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer md:block hidden"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/assets/images/avatar-2.jpg"
            width={32}
            height={32}
            className="rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div className="md:flex gap-1 cursor-pointer hidden">
          <h3 className="text-xs text-gray-700 font-medium">Andy Setyawan</h3>
          <span>
            <MdOutlineKeyboardArrowDown size={18} className="text-gray-700" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
