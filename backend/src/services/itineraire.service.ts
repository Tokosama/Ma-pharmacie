const orsKey = process.env.ORS_API_KEY;

export type Profile = "driving-car" | "foot-walking";
interface OrsRoute {
  summary: {
    distance: number;
    duration: number;
  };
}

interface OrsDirectionsResponse {
  routes: OrsRoute[];
}

const getItineraire = async (
  latDepart: string,
  lonDepart: string,
  latArrivee: string,
  lonArrivee: string,
  profile: Profile,
): Promise<OrsDirectionsResponse> => {
  const url = `https://api.openrouteservice.org/v2/directions/${profile}?start=${lonDepart},${latDepart}&end=${lonArrivee},${latArrivee}`;

  if (!orsKey) {
    throw new Error("Variable d'environnement ORS_API_KEY manquante");
  }
  const res = await fetch(url, {
    headers: {
      Authorization: orsKey,
    },
  });
  console.log(res)
  if (!res.ok) {
    throw new Error(`Erreur ORS: ${res.status}`);
  }
  return res.json() as Promise<OrsDirectionsResponse>;
};

export const itineraireService = {
  getItineraire,
};
