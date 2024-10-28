import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <div>
      <h1>نقشه مازندران</h1>
      <MapContainer center={[56.565, 52.0317]} zoom={10} style={{ height: '500px', width: '700px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[36.565, 52.0317]}>
          <Popup>مازندران</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
