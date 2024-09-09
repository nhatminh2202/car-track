import React from "react";
import Sidebar from "./Sidebar";
import Orders from "./Order";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {/* Nội dung chính của trang dashboard */}
        <h1 className="text-3xl font-bold mb-5">Orders</h1>
        <Orders />
      </div>
    </div>
  );
}

export default MainLayout;
