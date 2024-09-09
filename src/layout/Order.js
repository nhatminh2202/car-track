import React, { useState } from 'react';
import Button from '../components/button'; // Đảm bảo đường dẫn chính xác

const ordersData = {
  Ongoing: [
    { id: 1, customer: 'John Doe', product: 'Fentanyl', status: 'Processing', date: '2024-09-01', note: '' },
    { id: 2, customer: 'Jane Smith', product: 'Phenolbarbital', status: 'Shipped', date: '2024-09-01', note: '' },
  ],
  Completed: [
    { id: 3, customer: 'Alice Johnson', product: 'Ephedrine', status: 'Delivered', date: '2024-09-01', note: '' },
  ],
  Canceled: [
    { id: 4, customer: 'Bob Brown', product: 'Methyl Ergometrin', status: 'Canceled', date: '2024-09-01', note: 'Hàng sai cần đổi' },
  ],
};

// Chuyển đổi ordersData sang một mảng đơn hàng duy nhất
const allOrders = Object.values(ordersData).flat();

const Orders = () => {
  const [filter, setFilter] = useState('All');

  // Lọc đơn hàng dựa trên trạng thái
  const filteredOrders = filter === 'All' ? allOrders : allOrders.filter(order => order.status === filter);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      {/* Bộ lọc trạng thái */}
      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="status-filter" className="text-[14px] font-medium text-gray-700">Filter:</label>
        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-solid border-[rgb(4,61,151)] p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      {/* Hiển thị danh sách đơn hàng */}
      <div className="flex flex-col space-y-2">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-gray-50 p-4 rounded border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <p className="text-[10px] text-gray-500 italic">{order.date}</p>
              <p className="text-[12px] font-bold text-red-500">{order.status}</p>
            </div>
            <p className="text-[20px] font-bold text-blue-700 mb-1">{order.product}</p>
            <p className="text-[12px] text-black">{order.customer}</p>
            <div className="border-t mt-2 pt-2 text-[12px] italic">{order.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
