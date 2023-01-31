/// <reference types="cypress" />

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

describe("navigate to different planet/different page", () => {
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
    });
  }
});
