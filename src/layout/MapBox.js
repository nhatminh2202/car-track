import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import VehicleInfoForm from './VehicleInfoForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { vehicleLocations } from '../components/vehicleData/indexVehicleData';

// Đặt token Mapbox của bạn vào đây
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFvbWluaDA5MDkiLCJhIjoiY20wb282dnI5MGF2cjJscHVlcTBmdnVxcSJ9.Xxp6Mvw5DVoWowvtY4uHCw';

const MapBox = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Khởi tạo bản đồ
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [105.8492, 21.0285], // Tọa độ trung tâm Hà Nội
        zoom: 12, // Cấp độ zoom khởi đầu
        attributionControl: false,
      });

      // Thêm các marker cho phương tiện
      vehicleLocations.forEach((vehicle) => {
        const iconElement = document.createElement('div');
        iconElement.innerHTML = '<i class="fas fa-car text-red-600 text-xl"></i>'; // Sử dụng Font Awesome icon
        
        // Khởi tạo Marker
        const marker = new mapboxgl.Marker({ 
          element: iconElement, 
          anchor: 'bottom', // Đặt điểm neo của Marker ở dưới cùng
          offset: [0, -20] // Điều chỉnh offset để căn chỉnh chính xác
        })
        .setLngLat([vehicle.lng, vehicle.lat])
        .addTo(mapRef.current);

        // Lắng nghe sự kiện click để hiển thị thông tin xe
        marker.getElement().addEventListener('click', () => {
          setSelectedVehicle(vehicle); // Cập nhật xe được chọn
        });
      });

      // Dọn dẹp khi component bị hủy
      return () => mapRef.current.remove();
    }
  }, []);

  return (
    <div className="relative bg-white rounded-lg p-4 shadow-md">
      <div ref={mapContainerRef} className="w-full h-[90vh] rounded-lg overflow-hidden" />
      
      {/* Hiển thị thông tin xe ở góc phải */}
      {selectedVehicle && (
        <div className="absolute top-4 right-4 z-10">
          <VehicleInfoForm vehicle={selectedVehicle} />
        </div>
      )}
    </div>
  );
};

export default MapBox;
