import React from "react";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const UserTable = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen rounded-lg px-8 pt-6 pb-4">
      <table>
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
          <tr className="border-b border-gray-200">
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">1</td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              Leanne Graham
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              Bret
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              Sincere@april.biz
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              hildegard.org
            </td>
            <td className="p-3 whitespace-nowrap text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
          </tr>
          <tr>
            <td className="p-3 text-xs text-gray-700">1</td>
            <td className="p-3 text-xs text-gray-700">Leanne Graham</td>
            <td className="p-3 text-xs text-gray-700">Bret</td>
            <td className="p-3 text-xs text-gray-700">Sincere@april.biz</td>
            <td className="p-3 text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
            <td className="p-3 text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
            <td className="p-3 text-xs text-gray-700">hildegard.org</td>
            <td className="p-3 text-xs text-gray-700">
              {text.substring(0, 16)} ...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
