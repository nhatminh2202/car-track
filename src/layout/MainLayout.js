import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Orders from "./Order";
import MapBox from "./MapBox";
import Schedule from "./Schedule";

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
          isSidebarCollapsed ? "ml-10" : "ml-64"
        }`}
      >
        <MapBox sidebarCollapsed={isSidebarCollapsed} />

      </div>
    </div>
  );
}

export default MainLayout;
