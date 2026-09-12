"use client";

import { useState } from "react";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="flex border justify-between">
        {!isSearchOpen && (
          <>
            <button
              className=""
              onClick={() => setIsSearchOpen(true)}
            >
              Search icon
            </button>
            <div className="">Logo</div>
            <button className="">City icon </button>
          </>
        )}

        {isSearchOpen && (
          <>
            <div className="relative flex-1">
              <button
                className=" bg-secondary-500 absolute left-3 top-1/2 -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                close Icon
              </button>
              <input
                className=" border rounded-full w-full pl-10 py-2 "
                placeholder="Ex: Cité arcovnille, La madone"
                type="text"
              />
              <button className=" bg-red-400 absolute right-3 top-1/2 -translate-y-1/2">
                Search Icon
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
