import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

export const WelcomeCard = ({  onViewPharmacies,
}:{  onViewPharmacies: () => void;
}) => {
  return (
    <div className=" shadow-lg w-full relative overflow-hidden bg-primary-50/50 mx-3 p-4 tablet:px-6 tablet:pt-8 tablet:pb-6 text-primary-950 rounded-xl max-w-[525px]">
      <div className="absolute inset-0 blur-[150px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 351 213"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_340_2577)">
            <path
              d="M87.4887 98.4977C144.887 75.2946 84.819 45.462 -5.95062 9C-12.4024 18.2812 -23.9711 41.7495 -18.6317 61.3727C-11.9574 85.9017 30.0903 121.701 87.4887 98.4977Z"
              fill="var(--color-primary-500)"
            />
            <path
              d="M256.707 230.322C273.153 225.068 315.016 198.623 350.909 134.884C350.708 133.904 351.129 128.509 354.427 114.762C358.549 97.5794 285.653 90.6249 297.275 99.9748C308.898 109.325 259.979 129.597 236.732 128.254C213.484 126.911 247.405 214.88 249.219 223.695C250.669 230.748 254.816 231.052 256.707 230.322Z"
              fill="var(--color-secondary-500)"
            />
          </g>
          <defs>
            <clipPath id="clip0_340_2577">
              <rect
                width="351"
                height="214"
                fill="white"
                transform="translate(0 -1)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex justify-around">
          <Image
            src="/welcomeLogo.png"
            alt="Ma Pharmacie"
            width={216}
            height={43}
          />
        </div>
        <div className="text-center my-4 tablet:my-10 tablet:text-xl">
          <div>Trouvez en quelques secondes les</div>
          <div className="my-1.5">
            <span className="uppercase font-semibold bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent drop-shadow-md">
              pharmacies ouvertes
            </span>{" "}
            et de{" "}
            <span className="uppercase font-semibold bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent drop-shadow-md">
              garde
            </span>
            <br />
          </div>
          <div>autour de vous</div>
        </div>
        <div>
          <Button
          variant="gradient"
          icon={<ChevronRight className="w-4 h-4" />}
           onClick={onViewPharmacies}
        >
          Voir les Pharmacies
        </Button>
        </div>
      </div>
    </div>
  );
};
