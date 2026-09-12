"use client";

import { Header } from "@/components/Header";
import { useState } from "react";

type View = "welcome" | "map" | "grid";

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("grid");
  const onCityClick = () => {
    setCurrentView("grid");
  };
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Header, MapView, WelcomeCard viendront ici */}
      <Header currentView={currentView} onCityClick={onCityClick} />
    </main>
  );
}
