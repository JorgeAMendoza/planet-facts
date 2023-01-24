import axios from "axios";
import type { PlanetAPIResponse } from "types/api";

export async function getPlanetNames() {
  const { data } = await axios.get<PlanetAPIResponse>(
    "http://localhost:3000/api/planets"
  );

  const planetNames = data.planetData.map((planet) => ({
    params: {
      id: planet.name.toLowerCase(),
    },
  }));
  return planetNames;
}

export async function getPlanetData(planetName: string) {
  const { data } = await axios.get<PlanetAPIResponse>(
    "http://localhost:3000/api/planets"
  );

  const targetPlanet = data.planetData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );
  if (!targetPlanet) throw new Error("Planet not found");
  return targetPlanet;
}
