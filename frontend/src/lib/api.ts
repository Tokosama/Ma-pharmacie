import { Pharmacie } from "@/types/pharmacie";

export const getPharmacies = async (): Promise<Pharmacie[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pharmacies`);

  if (!res.ok) {
    throw new Error("Impossible de récupérer les pharmacies");
  }

  const json = await res.json();
  return json.data as Pharmacie[];
};
