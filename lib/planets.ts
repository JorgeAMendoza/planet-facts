import planetData from "../public/planets.json";

export async function getPlanetPaths() {
  const planetNames = planetData.map((planet) => ({
    params: {
      id: planet.name.toLowerCase(),
    },
  }));
  return planetNames;
}

export async function getPlanetData(planetName: string) {
  const targetPlanet = planetData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );
  if (!targetPlanet) throw new Error("Planet not found");
  return targetPlanet;
}
