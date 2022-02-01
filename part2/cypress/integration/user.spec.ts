describe("Lego shop", () => {
  before(() => {
    cy.openShop();
  });

  var testItem = {
    itemName: "The Mandalorian™ Key Light",
    itemPrice: "$13.99",
    itemType: "Key Chains",
    itemPriceCategory: "$0 - $25",
    itemAgeCategory: "6+"
  }

  it("Add a key chain to cart in category 6+", () => {
    cy.openByAgeCategory(testItem.itemAgeCategory);
    cy.filterByType(testItem.itemType, 86);
    cy.filterByPrice(testItem.itemPriceCategory, 86);
    cy.addItemToCart(0, testItem.itemName, testItem.itemPrice);

    cy.contains("My Bag (1)");
    cy.get("[data-test=product-title]").contains(testItem.itemName);
    cy.get("[data-test=product-price]").contains(testItem.itemPrice);
    cy.get("[data-test=quantity-value]").should("have.value", "1");
    cy.get("[data-test=remove-from-cart").should("be.visible");
    
    cy.contains("Checkout Securely").should("be.visible");
  });
});
