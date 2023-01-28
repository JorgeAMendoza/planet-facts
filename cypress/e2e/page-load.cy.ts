/// <reference types="cypress" />

describe("on first page load", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="planetName"]').as("planetName");
    cy.get('[data-cy="planeImage"]').as("planetImage");
    cy.get('[data-cy="overviewContentButton"]').as("overviewContentButton");
  });

  it("inital redirect goes to the earth page", () => {
    cy.location("pathname").should("contain", "earth");
  });

  it("page information displayed with default content", () => {
    cy.get("@planetName").should("contain.text", "earth");
    cy.get("@planetImage")
      .should("have.attr", "src")
      .should("contain", "earth");
    cy.get("@overviewContentButton").should(
      "have.css",
      "background-color",
      "#6D2ED5"
    );
  });
});
 