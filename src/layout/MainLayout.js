import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Orders from "./Order";
import MapBox from "./MapBox";

const MainLayout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex">
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className={`flex-grow p-6 bg-gray-100 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "ml-10" : "ml-64" // Điều chỉnh margin-left theo trạng thái của sidebar
        }`}
      >
        {/* <h1 className="text-3xl font-bold mb-5">Orders</h1> */}
        <MapBox />
      </div>
    </div>
  );
}

export default MainLayout;
