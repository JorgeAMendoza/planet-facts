/// <reference types="cypress" />

const hexToRgb = (hex: string) => {
  const rValue = parseInt(hex.substring(0, 2), 16);
  const gValue = parseInt(hex.substring(2, 4), 16);
  const bValue = parseInt(hex.substring(4), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
};

describe("on first page load", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="planetName"]').as("planetName");
    cy.get('[data-cy="planetImage"]').as("planetImage");
    cy.get('[data-cy="overviewButton"]').as("overviewContentButton");
    cy.get('[data-cy="rotationTime"]').as("rotationTime");
    cy.get('[data-cy="revolutionTime"]').as("revolutionTime");
    cy.get('[data-cy="radius"]').as("radius");
    cy.get('[data-cy="averageTemp"]').as("averageTemp");
    cy.get('[data-cy="source"]').as("source");
  });

  it("inital redirect goes to the earth page", () => {
    cy.location("pathname").should("contain", "planets/earth");
  });

  it.skip("page information displayed with default content", () => {
    cy.get("@planetName").should("contain.text", "Earth");
    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "planet-earth.svg");
    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      hexToRgb("6D2ED5")
    );
    cy.get("@source")
      .should("have.attr", "href")
      .and("contain", "https://en.wikipedia.org/wiki/Earth");

    cy.get("@rotationTime").should("contain.text", "0.99 days");
    cy.get("@revolutionTime").should("contain.text", "365.26 days");
    cy.get("@radius").should("contain.text", "6,371 KM");
    cy.get("@averageTemp").should("contain.text", "16°C");

    cy.get("base");
  });
});
