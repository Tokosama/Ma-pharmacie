"use client";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const iconUrl = typeof icon === "string" ? icon : icon.src;
const shadowUrl = typeof iconShadow === "string" ? iconShadow : iconShadow.src;

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl,
});

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

const LocateControl = ({ userPosition }: { userPosition: [number, number] | null }) => {
  const map = useMap();

 const handleLocate = () => {
  if (userPosition) {
    map.setView(userPosition, 16);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      map.setView([latitude, longitude], 16);
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        alert("Vous avez bloqué la localisation. Autorisez-la dans les paramètres de votre navigateur pour utiliser cette fonctionnalité.");
      } else {
        console.error("Erreur de géolocalisation :", error.message);
      }
    }
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

  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null,
  );
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Erreur de géolocalisation :", error.message);
      },
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
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
        {userPosition && (
          <Marker position={userPosition}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
        )}
        {pharmacies.map((pharmacie) => (
          <Marker
            key={pharmacie.id}
            position={[Number(pharmacie.latitude), Number(pharmacie.longitude)]}
          >
            <Popup>{pharmacie.nom}</Popup>
          </Marker>
        ))}
        <InvalidateMapSize />
<LocateControl userPosition={userPosition} />      </MapContainer>
    </div>
  );
};
