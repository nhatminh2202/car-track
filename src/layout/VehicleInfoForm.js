import React from 'react';

const VehicleInfoForm = ({ vehicle }) => {
  if (!vehicle) return null; // Kiểm tra xem vehicle có tồn tại không

  return (
    <form className="p-4 bg-white rounded-lg shadow-md border border-gray-300 w-64">
      <h3 className="text-xl font-semibold mb-4">Thông tin xe {vehicle.id}</h3>
      <table className="w-full text-sm text-gray-700">
        <tbody>
          <tr>
            <td className="font-semibold pr-2">Thông tin:</td>
            <td>{vehicle.info || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Loại xe:</td>
            <td>{vehicle.type || 'N/A'}</td>
          </tr>
          {vehicle.driver && (
            <>
              <tr>
                <td className="font-semibold pr-2">Tài xế:</td>
                <td>{vehicle.driver.name}, {vehicle.driver.age} tuổi</td>
              </tr>
              <tr>
                <td className="font-semibold pr-2">Loại giấy phép:</td>
                <td>{vehicle.driver.license || 'N/A'}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-2">Kinh nghiệm:</td>
                <td>{vehicle.driver.experience || 'N/A'}</td>
              </tr>
            </>
          )}
          <tr>
            <td className="font-semibold pr-2">Loại hàng vận chuyển:</td>
            <td>{vehicle.cargoType || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Thời gian xuất phát:</td>
            <td>{vehicle.departureTime || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Tổng quãng đường đã đi:</td>
            <td>{vehicle.totalDistance || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Trạng thái:</td>
            <td>{vehicle.status || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Mức nhiên liệu:</td>
            <td>{vehicle.fuelLevel || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Bảo dưỡng lần cuối:</td>
            <td>{vehicle.lastMaintenance || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Tuyến đường:</td>
            <td>{vehicle.route || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Tốc độ hiện tại:</td>
            <td>{vehicle.speed || 'N/A'}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-2">Tọa độ:</td>
            <td>{vehicle.lat}, {vehicle.lng}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default VehicleInfoForm;
