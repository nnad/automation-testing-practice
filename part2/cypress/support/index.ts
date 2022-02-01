/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        openMainPage(): Chainable<null>;
        openShop(): Chainable<null>;
        openShopMenu(): Chainable<null>;
        acceptCookie(acceptAllCookie?: boolean): Chainable<null>;
        openByAgeCategory(age: string): Chainable<null>;
        filterByType(type: string, numberOfResults: number): Chainable<null>;
        filterByPrice(price: string, numberOfResults: number): Chainable<null>;
        addItemToCart(itemIndex: number, itemName: string, itemPrice: string): Chainable<null>;
    }
}

Cypress.Commands.add(
    "openMainPage", () => {
        cy.visit('/');
    }
);

Cypress.Commands.add(
    "acceptCookie", (acceptAllCookie: boolean = false) => {
        if(acceptAllCookie) {
            cy.get("[data-test=cookie-accept-all]").click();
        }
        cy.get("[data-test=cookie-necessary-button]").click();
    }
);

Cypress.Commands.add(
    "openShop", () => {
        cy.openMainPage();
        cy.get("[data-test=age-gate-grown-up-cta]").click();
        cy.acceptCookie();
    }
)

Cypress.Commands.add(
    "openShopMenu", () => {
        cy.get("[data-analytics-title=shop]").click({force: true});
    }
)

Cypress.Commands.add(
    "openByAgeCategory",
    (age: string) => {
        cy.openShopMenu();
        cy.get("[data-analytics-title=age]")
            .should('be.visible')
            .click();
        cy.get("[data-test=navigation-submenu-grandchildren-link]")
            .contains(age)
            .click();
    }
);

Cypress.Commands.add(
    "filterByType",
    (type: string, numberOfResults: number) => {
        cy.get("[data-test=product-facet-productType-accordion-content-child]")
            .contains(type)
            .contains(numberOfResults)
            .click();

        cy.get("[data-test=listing-summary]").contains(numberOfResults);
    }
);

Cypress.Commands.add(
    "filterByPrice",
    (price: string, numberOfResults: number) => {
        cy.get("[data-test=product-facet-prices-accordion-content]")
            .scrollIntoView()
            .should('be.visible')
            .contains(price)
            .click();

        cy.get("[data-test=listing-summary]")
            .scrollIntoView()
            .should('be.visible')
            .contains(numberOfResults);
    }
);

Cypress.Commands.add(
    "addItemToCart",
    (itemIndex: number, itemName: string, itemPrice: string) => {
        cy.get("[data-test=product-item]")
            .should('be.visible')
            .eq(itemIndex)
            .should("contain", itemName)
            .should("contain.text", itemPrice)
            .contains("Add to Bag")
            .click();

        cy.get("[data-test=view-my-bag]")
            .click();
    }
);

