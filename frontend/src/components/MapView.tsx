"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useId } from "react";

const InvalidateMapSize = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
};

export const MapView = () => {
  const mapId = useId();
  return (
    <div className="absolute inset-0 z-0 isolate">
      <MapContainer
        key={mapId}
        center={[6.37035, 2.3912]} // coordonnées de Cotonou
        zoom={15}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          url={`https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_CARTO_API_KEY}`}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributalive">CARTO</a>'
        />
        <InvalidateMapSize />
      </MapContainer>
    </div>
  );
};
