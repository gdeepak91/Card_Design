import React, { useState } from "react";
import Menu from "./Components/Menu";
import MenuCard from "./Components/MenuCard";
import Navbar from "./Components/Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((a) => {
      return a.course;
    })
  ),
  "All",
];

const App = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (course) => {
    if (course === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedData = Menu.filter((data) => {
      return data.course === course;
    });
    setMenuData(updatedData);
  };
  return (
    <>
      <p className='text-center mt-3 mb-3' style={{ fontSize: "5rem" }}>
        List Of Students
      </p>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default App;
