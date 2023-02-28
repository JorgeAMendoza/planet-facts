/// <reference types="cypress" />
import hexToRgb from "cypress/utils/hex-to-rgb";

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

  it("inital redirect goes to the mercury page", () => {
    cy.location("pathname").should("contain", "planets/mercury");
  });

  it("page information displayed with default content", () => {
    cy.get("@planetName").should("contain.text", "Mercury");
    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "planet-mercury.svg");
    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      hexToRgb("419EBB")
    );
    cy.get("@source")
      .should("have.attr", "href")
      .and("contain", "https://en.wikipedia.org/wiki/Mercury");

    cy.get("@rotationTime").should("contain.text", "58.6 Days");
    cy.get("@revolutionTime").should("contain.text", "87.97 Days");
    cy.get("@radius").should("contain.text", "2,439.7 KM");
    cy.get("@averageTemp").should("contain.text", "430°c");
  });
});
