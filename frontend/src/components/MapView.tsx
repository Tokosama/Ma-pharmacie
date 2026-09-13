"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useId, useState } from "react";
import { getPharmacies } from "@/lib/api";
import { Pharmacie } from "@/types/pharmacie";
import { LocateButton } from "./LocateButton";

const InvalidateMapSize = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
};

const LocateControl = () => {
  const map = useMap();

  const handleLocate = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 16);
      },
      (error) => {
        console.error(
          "Géolocalisation refusée ou indisponible :",
          error.message,
        );
      },
    );
  };

  return <LocateButton onLocate={handleLocate} />;
};

export const MapView = () => {
  const mapId = useId();
  const [pharmacies, setPharmacies] = useState<Pharmacie[]>([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const data = await getPharmacies();
      setPharmacies(data);
    };

    fetchPharmacies();
  }, []);

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

        {pharmacies.map((pharmacie) => (
          <Marker
            key={pharmacie.id}
            position={[Number(pharmacie.latitude), Number(pharmacie.longitude)]}
          >
            <Popup>{pharmacie.nom}</Popup>
          </Marker>
        ))}
        <InvalidateMapSize />
        <LocateControl />
      </MapContainer>
    </div>
  );
};
