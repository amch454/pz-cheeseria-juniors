/// <reference types="cypress" />

context('Purchase Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Purchase Items', () => {
    // add items to cart, 1 JARLSBERG and 2 ROYALP TILSIT
    cy.get('[data-cy=add-to-cart-5]').click();
    cy.get('[data-cy=add-to-cart-7]').click();
    cy.get('[data-cy=add-to-cart-7]').click();
    // check that 3 items have been added to the cart
    cy.get('[data-cy=badge-count]').should('have.text', '3');
    // open the cart and verify that both cheese are there, with the correct quantities and price
    cy.get('[data-cy=open-cart]').click();
    cy.get('[data-cy=cart-item-5]')
    cy.get('[data-cy=cart-item-price-5]').should('have.text', 'Price: $88.15');
    cy.get('[data-cy=cart-item-amount-5]').should('have.text', '1');
    cy.get('[data-cy=cart-item-total-5]').should('have.text', 'Total: $88.15');
    cy.get('[data-cy=cart-item-7]')
    cy.get('[data-cy=cart-item-price-7]').should('have.text', 'Price: $625.57');
    cy.get('[data-cy=cart-item-amount-7]').should('have.text', '2');
    cy.get('[data-cy=cart-item-total-7]').should('have.text', 'Total: $1251.14');
    cy.get('[data-cy=cart-total').should('have.text', 'Total: $1339.29');
    // purchase and verify that the success snackbar is displayed
    cy.get('[data-cy=purchase]').click();
    cy.get('[data-cy=success-message').should('have.text', 'Purchase successful!');
    // get out of the drawer
    cy.get('body').click(0,0);
    // check that both cheeses are in recent purchases with the correct price, amount and total
    cy.get('[data-cy=recent-purchases]').click();
    cy.get('[data-cy=purchase-item-5]')
    cy.get('[data-cy=purchase-item-price-5]').should('have.text', 'Price: $88.15');
    cy.get('[data-cy=purchase-item-amount-5]').should('have.text', 'Amount: 1');
    cy.get('[data-cy=purchase-item-total-5]').should('have.text', 'Total: $88.15');
    cy.get('[data-cy=purchase-item-7]')
    cy.get('[data-cy=purchase-item-price-7]').should('have.text', 'Price: $625.57');
    cy.get('[data-cy=purchase-item-amount-7]').should('have.text', 'Amount: 2');
    cy.get('[data-cy=purchase-item-total-7]').should('have.text', 'Total: $1251.14');
  })

})
