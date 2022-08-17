import React, { useState } from "react";

import DetailModal from "./DetailModal";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const UserTable = ({ datas, search }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [detailID, setDetailID] = useState(null);

  //   const handleClick = (id) => {
  //     setOpenDetails(true);
  //     setDetailID(id);
  //   };

  const filteredData = datas.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(detailID);

  return (
    <div>
      <div className="bg-[#FFFFFF] rounded-lg px-8 pt-6 pb-4">
        <table className="w-full">
          <thead className="text-xs border-b border-gray-200 text-gray-400 font-light">
            <tr>
              <th className="p-3 w-12 tracking-wide text-left">ID</th>
              <th className="p-3 w-24 tracking-wide text-left">Name</th>
              <th className="p-3 w-24 tracking-wide text-left">Username</th>
              <th className="p-3 w-24 tracking-wide text-left">Email</th>
              <th className="p-3 tracking-wide text-left">Address</th>
              <th className="p-3 w-24 tracking-wide text-left">Phone</th>
              <th className="p-3 w-24 tracking-wide text-left">Website</th>
              <th className="p-3 tracking-wide text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 cursor-pointer"
                onClick={() => {
                  setOpenDetails(true), setDetailID(data.id);
                }}
              >
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.id}
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.name}
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.username}
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.email.substring(0, 10)}...
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.address.city.substring(0, 16)} ...
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.phone.substring(0, 9)} ...
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.website}
                </td>
                <td className="p-3 whitespace-nowrap text-xs text-gray-700">
                  {data.company.name.substring(0, 16)} ...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <DetailModal
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
          datas={datas}
          detailID={detailID}
        />
      </div>
    </div>
  );
};

export default UserTable;
