import React from "react";
import Sidebar from "./layout/Sidebar";


function App() {
  return (
    
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {/* Nội dung chính của trang dashboard */}
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
