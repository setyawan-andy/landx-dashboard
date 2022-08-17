import React from "react";

const Card = ({ name, count, bgColor, icon }) => {
  return (
    <div className="bg-[#FFFFFF] flex justify-center items-center rounded-md px-8 py-6">
      <div className="flex gap-3">
        <div className={`bg-${bgColor} rounded-full p-4`}>{icon}</div>
        <div className="flex justify-center gap-1 flex-col">
          <h2 className="font-bold">{count}</h2>
          <h3 className="text-xs text-gray-400 font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
