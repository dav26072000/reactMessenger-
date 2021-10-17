/* eslint-disable no-undef */
/// <reference types="cypress" />

const randomEmail = `davo${Math.floor(Math.random() * 10000)}@mail.ru`;

describe("my chat tests", () => {
  it("register", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("[name=firstName]").type("Gago Davtyan");
    cy.get("[name=email]").type(randomEmail);
    cy.get("[name=password]").type("dav123456");
    cy.get("[name=confirmPassword]").type("dav123456");
    cy.get("button[type=submit]").click();

    cy.location("pathname").should("equal", "/chat");
  });

  it("login", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[name=email]").type(randomEmail);
    cy.get("[name=password]").type("dav123456");
    cy.get("button[type=submit]").click();

    cy.location("pathname").should("equal", "/chat");
  });
});
