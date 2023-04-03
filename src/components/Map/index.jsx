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
import { Link, Typography } from "@mui/material";
import { getSearchRequestURL } from "../../utils/record";
const position = [49.110918, -122.778992];

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
                <Popup style={{ textAlign: "center" }}>
                  <Typography variant="h5" as="p">
                    {el.properties.name}
                  </Typography>
                  <Link
                    href={getSearchRequestURL(
                      "DESCRIPTION",
                      `INDEXGEO ${el.properties.name}`
                    )}
                  >
                    Explore area
                  </Link>
                </Popup>
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
