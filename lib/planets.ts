// file for helper functions for grabbing planet data, need one for grabbing planet names for get static params,
// another for grabbing based on planet requested.
import axios from "axios";
import type { PlanetAPIResponse } from "types/api";

export async function getPlanetNames() {
  const { data: planetData } = await axios.get<PlanetAPIResponse>(
    "/api/planets"
  );

  const planetNames = planetData.map((planet) => ({
    params: {
      name: planet.name,
    },
  }));
  return planetNames;
}

export async function getPlanetData(planetName: string) {
  const { data: planetData } = await axios.get<PlanetAPIResponse>(
    "/api/planets"
  );

  const targetPlanet = planetData.find((planet) => planet.name === planetName);
  if (!targetPlanet) throw new Error("Planet not found");
  return targetPlanet;
}
