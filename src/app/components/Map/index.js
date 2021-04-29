import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <MapContainer
      className="map"
      center={[49.42231354080357, 26.984725986572155]}
      zoom={14}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default Map;
