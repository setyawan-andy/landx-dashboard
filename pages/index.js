import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Userpage from "../components/Userpage";

import axios from "axios";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/glendmaatita/userjsondemo/db";
    axios
      .get(url)
      .then((response) => {
        setDatas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <Userpage datas={datas} search={search} setSearch={setSearch} />
    </div>
  );
};

export default Home;
