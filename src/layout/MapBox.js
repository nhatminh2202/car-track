import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Đặt token Mapbox của bạn vào đây
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFvbWluaDA5MDkiLCJhIjoiY20wb282dnI5MGF2cjJscHVlcTBmdnVxcSJ9.Xxp6Mvw5DVoWowvtY4uHCw';

const MapBox = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Khởi tạo bản đồ
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // Container để hiển thị bản đồ
        style: 'mapbox://styles/mapbox/outdoors-v11', // Style của bản đồ
        center: [105.8492, 21.0285], // Tọa độ trung tâm của bản đồ (Hà Nội)
        zoom: 12, // Zoom level của bản đồ
        attributionControl: false,
      });

      // Thêm một marker (tùy chọn)

      // Dọn dẹp khi component bị hủy
      return () => map.remove();
    }
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '70vh', // Chiều cao của bản đồ chiếm toàn bộ viewport
      }}
    />
    </div>
  );
};

export default MapBox;
