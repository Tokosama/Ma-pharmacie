import { LocateFixed } from "lucide-react";
type LocateButtonPorps = {
  onLocate: () => void;
};

export const LocateButton = ({ onLocate }: LocateButtonPorps) => {
  return (
    <button
      className="absolute z-9999 bottom-6 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-700/80 shadow-md hover:bg-red-400"
      onClick={() => {
        console.log("Bouton cliqué !");
        onLocate();
      }}
    >
      <div className="relative flex h-7 w-7 items-center justify-center">
        <LocateFixed className="h-7 w-7 text-white" />
        <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </button>
  );
};
