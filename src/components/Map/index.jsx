import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const position = [49.1904, -122.8490];
var myIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png",
});
const markers = {
  features: [
    {
      type: "Feature",
      properties: {
        PARK_ID: 960,
        NAME: "Surrey Center",
        DESCRIPTIO: "Flat asphalt surface, 5 components",
      },
      geometry: {
        type: "Point",
        coordinates: [49.1904, -122.8490],
      },
    },
    {
      type: "Feature",
      properties: {
        PARK_ID: 1219,
        NAME: "Surrey Libraries - City Centre Branch",
        DESCRIPTIO:
          "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
      },
      geometry: {
        type: "Point",
        coordinates: [49.104431, -122.801094],
      },
    },
  ],
};
const Map = () => {
  const [activePark, setActivePark] = useState(null);
  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={position}
        zoom={12}
        maxZoom={18}
      >
        {markers.features.map((el) => (
          <Marker position={el.geometry.coordinates} icon={myIcon}>
            <Popup>{el.properties.NAME}</Popup>
          </Marker>
        ))}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

export default Map;