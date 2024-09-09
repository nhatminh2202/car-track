import React, { useState } from "react";
import Button from "../components/button";
import logo from "../assets/128px-Traccar-logo.svg.png";
import {
  HomeOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  LogoutOutlined,
  ScheduleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"; // Biểu tượng từ Ant Design

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Trạng thái của sidebar (mở hoặc đóng)
  const [activeButton, setActiveButton] = useState(null); // Trạng thái của nút đang hoạt động

  // Hàm xử lý khi nhấn vào nút mũi tên
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Hàm xử lý khi nhấn vào nút
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  return (
    <div
      className={`relative h-screen p-5 shadow-md transition-width duration-300 ease-in-out ${isCollapsed ? "w-10" : "w-64"}`}
      style={{ borderRadius: "20px" }}
    >
      {/* Nút mũi tên điều khiển sidebar */}
      <div
        className="absolute bottom-5 right-[-20px] w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors"
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <ArrowRightOutlined className="text-2xl text-white" />
        ) : (
          <ArrowLeftOutlined className="text-2xl text-white" />
        )}
      </div>

      {/* Logo và danh sách menu */}
      <div className={`${isCollapsed ? "hidden" : ""}`}>
        <div className={`text-center mb-4`}>
          <img src={logo} className="w-full h-full" />
        </div>
        <hr className={`border-gray-300 border-solid mb-4`} />
        <ul
          className={`space-y-4 transition-all duration-1000 ease-in-out ${
            isCollapsed ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-0"
          }`}
        >
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-100`}
          >
            <Button
              className="w-full"
              type="default"
              icon={<HomeOutlined className="text-lg" />}
              active={activeButton === "Dashboard"}
              onClick={() => handleButtonClick("Dashboard")}
            >
              Dashboard
            </Button>
          </li>
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-300`}
          >
            <Button
            className="w-full"
              type="default"
              icon={<CarOutlined className="text-lg" />}
              active={activeButton === "Vehicles"}
              onClick={() => handleButtonClick("Vehicles")}
            >
              Vehicles
            </Button>
          </li>
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-500`}
          >
            <Button
            className="w-full"
              type="default"
              icon={<ShoppingCartOutlined className="text-lg" />}
              active={activeButton === "Orders"}
              onClick={() => handleButtonClick("Orders")}
            >
              Orders
            </Button>
          </li>
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-700`}
          >
            <Button
            className="w-full"
              type="default"
              icon={<ScheduleOutlined className="text-lg" />}
              active={activeButton === "Schedule"}
              onClick={() => handleButtonClick("Schedule")}
            >
              Schedule
            </Button>
          </li>
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-900`}
          >
            <Button
            className="w-full"
              type="default"
              icon={<SettingOutlined className="text-lg" />}
              active={activeButton === "Settings"}
              onClick={() => handleButtonClick("Settings")}
            >
              Settings
            </Button>
          </li>
          <li
            className={`transform transition-all duration-1000 ease-in-out delay-1100`}
          >
            <Button
            className="w-full"
              type="default"
              icon={<LogoutOutlined className="text-lg" />}
              active={activeButton === "Logout"}
              onClick={() => handleButtonClick("Logout")}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
