import React from "react";

const Button = ({ type, icon, children, active, onClick, className = "" }) => {
  // Định nghĩa các kiểu giao diện cho từng loại nút
  const themeClasses = {
    default: "hover:bg-gray-200 text-gray-800",
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  // Định nghĩa kiểu dáng cho trạng thái hoạt động
  const activeClasses = "bg-[rgb(4,61,151)] text-white";

  // Xác định giao diện dựa trên loại nút, nếu không có sẽ dùng kiểu mặc định
  const selectedTheme = active ? activeClasses : themeClasses[type] || themeClasses.default;

  return (
    <button
      className={`flex items-center p-2 rounded-lg cursor-pointer ${selectedTheme} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
