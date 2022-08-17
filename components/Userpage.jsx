import React from "react";

import { BsFillRecordCircleFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { RiLock2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

import Header from "./Header";
import Card from "./Card";
import UserTable from "./UserTable";

const counts = [
  {
    name: "New Users",
    count: 10,
    bgColor: "bg-blue-200",
    icon: <BsFillRecordCircleFill size={24} className="text-blue-400" />,
  },
  {
    name: "Pending Users",
    count: 2147,
    bgColor: "bg-orange-200",
    icon: <CgSandClock size={24} className="text-orange-400" />,
  },
  {
    name: "Closed Users",
    count: 31457,
    bgColor: "bg-green-200",
    icon: <RiLock2Fill size={24} className="text-green-400" />,
  },
  {
    name: "Deleted Users",
    count: 23419,
    bgColor: "bg-red-200",
    icon: <FaTrash size={24} className="text-red-400" />,
  },
];

const Userpage = ({ datas, search, setSearch }) => {
  return (
    <div className="bg-[#f7f7f7] w-full">
      <Header setSearch={setSearch} />
      <div className="my-6 hidden md:flex gap-6 justify-evenly mx-6">
        {counts.map((count, index) => (
          <Card
            key={index}
            name={count.name}
            count={count.count}
            bgColor={count.bgColor}
            icon={count.icon}
          />
        ))}
      </div>
      <div className="my-6 mx-8">
        <UserTable datas={datas} search={search} />
      </div>
    </div>
  );
};

export default Userpage;
