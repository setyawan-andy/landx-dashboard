import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const menus = [
  {
    name: "Dashboard",
    url: "/",
    icon: <MdOutlineDashboard size={20} />,
  },
  {
    name: "Users",
    url: "/",
    icon: <AiOutlineUser size={20} />,
  },
  {
    name: "Messages",
    url: "/",
    icon: <FiMessageSquare size={20} />,
  },
  {
    name: "Reports",
    url: "/",
    icon: <TbReportAnalytics size={20} />,
    margin: true,
  },
  {
    name: "Favorites",
    url: "/",
    icon: <AiOutlineHeart size={20} />,
  },
  {
    name: "Orders",
    url: "/",
    icon: <FiShoppingCart size={20} />,
  },
  {
    name: "Folders",
    url: "/",
    icon: <FiFolder size={20} />,
    margin: true,
  },
  {
    name: "Settings",
    url: "/",
    icon: <RiSettings4Line size={20} />,
  },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`${
          openSidebar ? "w-64" : "w-16"
        } bg-[#1d1e41] absolute md:relative z-10 md:z-0 min-h-[100vh] md:min-h-screen text-gray-400 px-4`}
      >
        <div className="py-6 flex justify-between pl-2">
          {openSidebar && (
            <h2 className="text-gray-100 font-semibold">
              Admin <span className="text-[#ebb87f]">.</span>
            </h2>
          )}
          <HiMenuAlt3
            className="cursor-pointer hover:text-gray-100"
            size={24}
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-5 relative">
          {menus.map((menu, index) => (
            <Link href={menu.url} key={index}>
              <a
                className={`${
                  menu.margin && "mt-5"
                } group flex items-center hover:text-gray-100 text-sm gap-6 font-medium p-2 hover:bg-[#27274f] rounded-md`}
              >
                <div>{menu.icon}</div>
                <h2
                  // style={{
                  //   transitionDelay: `${index + 3}00ms`,
                  // }}
                  className={`${
                    !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
                  } whitespace-pre duration-500`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    openSidebar && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
