import React from "react";
import Button from "../components/button";
import {
  HomeOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  LogoutOutlined,
  ScheduleOutlined
} from "@ant-design/icons"; // Biểu tượng từ Ant Design


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5 shadow-md">
      <div className="text-center mb-10">
        <img 
          src="/src/assets/128px-Traccar-logo.svg.png"
          //alt="Track car"
          className="w-32 h-auto"
        />
      </div>
      <hr className="border-gray-200 border-solid mb-4" />
      <ul className="space-y-4">
        <li>
          <Button type="default" icon={<HomeOutlined className="text-lg" />}>
            Dashboard
          </Button>
        </li>
        <li>
          <Button type="default" icon={<CarOutlined className="text-lg" />}>
            Vehicles
          </Button>
        </li>
        <li>
          <Button type="default" icon={<ShoppingCartOutlined className="text-lg" />}>
            Orders
          </Button>
        </li>
        <li>
          <Button type="default" icon={<ScheduleOutlined className="text-lg" />}>
            Schedule
          </Button>
        </li>
        <li>
          <Button type="default" icon={<SettingOutlined className="text-lg" />}>
            Settings
          </Button>
        </li>
        <li>
          <Button type="default" icon={<LogoutOutlined className="text-lg" />}>
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
