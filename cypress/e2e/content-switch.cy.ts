/// <reference types="cypress" />
import hexToRgb from "cypress/utils/hex-to-rgb";

describe("switching content on a planet page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="planetName"]').as("planetName");
    cy.get('[data-cy="planetImage"]').as("planetImage");
    cy.get('[data-cy="overviewButton"]').as("overviewContentButton");
    cy.get('[data-cy="internalButton"]').as("structureContentButton");
    cy.get('[data-cy="geologyButton"]').as("geologyContentButton");
    cy.get('[data-cy="rotationTime"]').as("rotationTime");
    cy.get('[data-cy="revolutionTime"]').as("revolutionTime");
    cy.get('[data-cy="radius"]').as("radius");
    cy.get('[data-cy="averageTemp"]').as("averageTemp");
    cy.get('[data-cy="source"]').as("source");
  });

  it("switch to structure content", () => {
    cy.get("@structureContentButton").click();
    cy.get("@structureContentButton").should(
      "have.css",
      "background-color",
      hexToRgb("419EBB")
    );

    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "planet-mercury-internal.svg");
    cy.get("@source")
      .should("have.attr", "href")
      .and(
        "contain",
        "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
      );
  });

  it("switch to geology content", () => {
    cy.get("@geologyContentButton").click();
    cy.get("@geologyContentButton").should(
      "have.css",
      "background-color",
      hexToRgb("419EBB")
    );

    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "planet-mercury.svg");
    cy.get("@source")
      .should("have.attr", "href")
      .and("contain", "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface");
    cy.get('[data-cy="geologyImage"]').should("exist");
    cy.get('[data-cy="geologyImage"]')
      .should("have.attr", "src")
      .should("contain", "geology-mercury.png");
  });
});
