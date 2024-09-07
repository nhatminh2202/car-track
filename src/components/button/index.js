import React from "react";

const Button = ({ type, icon, children }) => {
  // Định nghĩa các theme theo từng kiểu (type)
  const themeClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  // Xác định theme dựa trên type, nếu không có sẽ dùng theme mặc định
  const selectedTheme = themeClasses[type] || themeClasses.default;

  return (
    <button
      className={`flex items-center p-2 rounded-lg cursor-pointer w-full ${selectedTheme}`}
      //onClick={onClick}
    >
      {icon && <span className="mr-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
