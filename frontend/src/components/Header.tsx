"use client";

import { MapPinHouse, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
type View = "welcome" | "map" | "grid";

export const Header = ({
  currentView,
  onCityClick,
}: {
  currentView: View;
  onCityClick: () => void;
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {!isSearchOpen && (
        <div className="flex border-2 h-12 px-4 py-1 mt-3 rounded-lg mx-3  border-primary-800/20  justify-between items-center bg-neutral-300/30 backdrop-blur-[2px] shadow-md ">
          <button
            className=""
            onClick={() => setIsSearchOpen(true)}
          >
            <Search
              className="w-6 h-6 text-primary-800"
              strokeWidth={2}
            />
          </button>
          <div className=" flex">
            <Image
              src="/mobileLogo.png"
              alt="Ma Pharmacie"
              width={186}
              height={41}
            />
          </div>
          <button
            className={`${currentView == "grid" ? "bg-primary-800/30 px-2 py-1 rounded-md  w-8 h-8" : ""}`}
            onClick={() => {
              onCityClick();
            }}
          >
            <MapPinHouse
              className={` text-primary-800 ${currentView === "grid" ? "w-4.5 h-4.5" : "w-7 h-7"} `}
              strokeWidth={currentView == "grid" ? 2 : 2}
            />{" "}
          </button>
        </div>
      )}

      {isSearchOpen && (
        <div className="flex  h-12 relative flex-1 py-1.5  mt-3 rounded-lg mx-3  border-primary-800  justify-between bg-neutral-300/30 backdrop-blur-xs shadow-md ">
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2"
            onClick={() => setIsSearchOpen(false)}
          >
            <X className="text-error-400" />
          </button>
          <input
            className="rounded-lg mx-2 border border-primary-800  w-full pl-10 py-2 h-9 "
            placeholder="Ex: Cité arconville, La madone..."
            type="text"
          />
          <button className=" bg-secondary-800/80  w-7.5 h-7.5 flex justify-center items-center absolute right-3 top-1/2 -translate-y-1/2 rounded-[5px] ">
            <Search className=" w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};
