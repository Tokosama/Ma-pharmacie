"use client";

import { Header } from "@/components/Header";
import { WelcomeCard } from "@/components/WelcomeCard";
import { useState } from "react";

import dynamic from "next/dynamic";

const MapView = dynamic(
  () => import("@/components/MapView").then((mod) => mod.MapView),
  {
    ssr: false,
  },
);

type View = "welcome" | "map" | "grid";

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("welcome");
  const onCityClick = () => {
    setCurrentView("grid");
  };
  const onViewPharmacies = () => {
    setCurrentView("map");
  };
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Header, MapView, WelcomeCard viendront ici */}
      <MapView />
      <Header
        currentView={currentView}
        onCityClick={onCityClick}
      />

      {currentView === "welcome" && (
        <>
          <div className="absolute inset-0 z-10 bg-black/25 backdrop-blur-[2px]" />
          <div className="absolute inset-0 z-20 flex  items-center justify-center">
            <WelcomeCard onViewPharmacies={onViewPharmacies} />
          </div>
        </>
      )}
    </main>
  );
}
