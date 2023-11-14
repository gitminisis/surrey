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
import { getMap } from "../../utils/map";
import { Link, Typography } from "@mui/material";
import {
  getSearchRequestURL,
  getUnionSearchRequestURL,
} from "../../utils/record";
import { getCurrentSession } from "../../utils/functions";
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
          let place = el.properties.name;
          return (
            <>
              <Polygon color={COLOR} positions={el.geometry.coordinates[0]}>
                <Popup style={{ textAlign: "center" }}>
                  <Typography variant="h5" as="p">
                    {place}
                  </Typography>
                  <Link
                    href={getUnionSearchRequestURL(
                      `INDEXGEO ${place} or PLACE_ASSOC_NAME ${place} or AP_DISTRICT ${place}`
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
