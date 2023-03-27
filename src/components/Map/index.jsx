import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Tooltip,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getMap } from "../../utils/map";

const position = [49.110918, -122.778992];
var myIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png",
});

const Map = () => {
  const COLOR = "red"; // Credited to Trang Vo
  const map = getMap();
  const [activePark, setActivePark] = useState(null);
  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={position}
        zoom={11}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        {map.features.map((el) => {
          return (
            <>
              <Polygon color={COLOR} positions={el.geometry.coordinates[0]}>
                <Popup>{el.properties.name}</Popup>
              </Polygon>
            </>
          );
        })}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

export default Map;
