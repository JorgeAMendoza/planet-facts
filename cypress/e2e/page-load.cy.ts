/// <reference types="cypress" />

describe("on first page load", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("just checking if this works!", () => {
    cy.get("p");
  });
});
