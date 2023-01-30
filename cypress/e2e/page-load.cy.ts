/// <reference types="cypress" />

describe("on first page load", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="planetName"]').as("planetName");
    cy.get('[data-cy="planeImage"]').as("planetImage");
    cy.get('[data-cy="overviewContentButton"]').as("overviewContentButton");
    cy.get('[data-cy="rotationTime"]').as("rotationTime");
    cy.get('[data-cy="revolutionTime"]').as("revolutionTime");
    cy.get('[data-cy="radius"]').as("radius");
    cy.get('[data-cy="averageTemp"]').as("averageTemp");
    cy.get('[data-cy="source"]').as("source");
  });

  it("inital redirect goes to the earth page", () => {
    cy.location("pathname").should("contain", "planets/earth");
  });

  it("page information displayed with default content", () => {
    cy.get("@planetName").should("contain.text", "earth");
    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "planet-earth.svg");
    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      "#6D2ED5"
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
