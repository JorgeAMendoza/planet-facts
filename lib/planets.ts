import axios from "axios";
import type { PlanetAPIResponse } from "types/api";
const HOST = process.env.HOST!;
const PORT = process.env.PORT!;

export async function getPlanetNames() {
  const { data } = await axios.get<PlanetAPIResponse>(
    `${HOST}:${PORT}/api/planets`
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
    `${HOST}:${PORT}/api/planets`
  );

  const targetPlanet = data.planetData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );
  if (!targetPlanet) throw new Error("Planet not found");
  return targetPlanet;
}
