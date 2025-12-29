import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// ==========================================
// GIVEN - Pré-condições
// ==========================================

Given('que estou na página inicial do site', () => {
  cy.visit('https://www.automationexercise.com/products');
  cy.get('#search_product').should('be.visible');
});

// ==========================================
// WHEN - Ações
// ==========================================

When('eu busco por {string}', (searchTerm) => {
  cy.get('#search_product')
    .clear()
    .type(searchTerm);

  cy.get('#submit_search').click();
});

When('eu adiciono o primeiro produto ao carrinho', () => {
  cy.get('.productinfo')
    .first()
    .find('.add-to-cart')
    .click({ force: true });
});

When('eu continuo comprando', () => {
  cy.get('.modal-footer button', { timeout: 5000 })
    .should('be.visible')
    .click();

  cy.get('.modal-content').should('not.be.visible');
});

When('eu acesso o carrinho', () => {
  cy.contains('View Cart').click();
});

// ==========================================
// THEN - Validações de Busca
// ==========================================

Then('eu devo ver resultados da busca', () => {
  cy.get('.productinfo')
    .should('have.length.greaterThan', 0);
});

Then('os resultados devem conter o termo {string}', (searchTerm) => {
  cy.get('.productinfo')
    .first()
    .invoke('text')
    .should('match', new RegExp(searchTerm, 'i'));
});

// ==========================================
// THEN - Validações do Carrinho
// ==========================================

Then('eu devo ver a confirmação de produto adicionado', () => {
  cy.get('.modal-content')
    .find('.modal-body')
    .should('contain.text', 'Your product has been added to cart.');
});

Then('o produto deve estar no carrinho', () => {
  cy.get('.cart_info')
    .should('be.visible')
    .within(() => {
      cy.contains('Sleeveless Dress').should('be.visible');
    });
});

Then('eu devo ver os produtos adicionados no carrinho', () => {
  cy.get('.cart_info')
    .find('tr[id^="product-"]')
    .should('have.length.greaterThan', 0);
});

Then('eu posso prosseguir para o checkout', () => {
  cy.get('.btn.btn-default.check_out')
    .should('be.visible')
    .and('contain.text', 'Proceed To Checkout');
});
