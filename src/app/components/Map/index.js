import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <MapContainer
      className="map"
      center={[48.92257800131836, 24.710304818155336]}
      zoom={14}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.92257800131836, 24.710304818155336]}></Marker>
    </MapContainer>
  );
};

export default Map;
