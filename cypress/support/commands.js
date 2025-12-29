// ***********************************************
// Comandos customizados para o projeto de automação
// ***********************************************

/**
 * Comando para realizar login no site
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 */
Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').clear().type(email);
  cy.get('#passwd').clear().type(password);
  cy.get('#SubmitLogin').click();
});

/**
 * Comando para adicionar produto ao carrinho
 * @param {string} productName - Nome do produto a ser adicionado
 */
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains(productName).parents('.product-container').find('.ajax_add_to_cart_button').click();
  cy.get('.layer_cart_product', { timeout: 10000 }).should('be.visible');
});

/**
 * Comando para realizar busca de produto
 * @param {string} searchTerm - Termo de busca
 */
Cypress.Commands.add('searchProduct', (searchTerm) => {
  cy.get('#search_query_top').clear().type(searchTerm);
  cy.get('button[name="submit_search"]').click();
});

/**
 * Comando para validar itens no carrinho
 * @param {Array} expectedProducts - Array com nomes dos produtos esperados
 */
Cypress.Commands.add('validateCartProducts', (expectedProducts) => {
  expectedProducts.forEach((product) => {
    cy.get('.cart_description').should('contain', product);
  });
});
