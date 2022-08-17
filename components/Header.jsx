import React from "react";
import Image from "next/image";

import { BsFillBellFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#FFFFFF] px-8 py-5 shadow-sm flex justify-between items-center">
      <div className="text-xl font-semibold">Users</div>
      <div className="flex gap-6 justify-center items-center">
        <div>
          <BsFillBellFill
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer"
          />
        </div>
        <div>
          <FaEnvelope
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer"
          />
        </div>
        <div>
          <Image
            src="/assets/images/avatar-2.jpg"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex gap-1 cursor-pointer">
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
