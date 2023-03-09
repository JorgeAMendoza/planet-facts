/// <reference types="cypress" />

describe("navigate to different planet/different page", () => {
  const planets = [
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Earth",
  ];
  beforeEach(() => {
    cy.visit("/");
  });

  for (const planet of planets) {
    it(`navigate to planet ${planet}`, () => {
      cy.get(`[data-cy="to${planet}Link"]`).click();
      cy.location("pathname").should(
        "contain",
        `planets/${planet.toLowerCase()}`
      );
      cy.get('[data-cy="planetName"]').should("contain.text", planet);
      console.log(planet);
      cy.title().should("eq", `The Planets: ${planet}`);
    });
  }
});

export {};
