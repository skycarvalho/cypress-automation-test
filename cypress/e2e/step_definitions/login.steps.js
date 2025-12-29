/**
 * Step Definitions para os cenários de Login
 * Implementa os passos definidos no arquivo login.feature
 */

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// ==========================================
// GIVEN - Pré-condições
// ==========================================

/**
 * Acessa a página de login do site
 */
Given('que estou na página de login', () => {
  // Visita a página inicial e clica no link de login
  cy.visit('https://www.automationexercise.com/login');
  
  // Valida que está na página de autenticação
  cy.url().should('include', 'login');
  cy.get('#email').should('be.visible');
});

// ==========================================
// WHEN - Ações
// ==========================================

/**
 * Preenche o campo de email
 * @param {string} email - Email a ser preenchido
 */
When('eu preencho o email {string}', (email) => {
  cy.get('#email').clear().type(email);
});

/**
 * Preenche o campo de password
 * @param {string} password - password a ser preenchida
 */
When('eu preencho a password {string}', (password) => {
  cy.get('#password').clear().type(password);
});

/**
 * Clica no botão de login
 */
When('eu clico no botão de login', () => {
  cy.get('#login-button').click();
});

// ==========================================
// THEN - Validações
// ==========================================

/**
 * Valida redirecionamento para a página de conta
 */
Then('eu devo ser redirecionado para a página de conta', () => {
  cy.url().should('include', 'my-account');
  cy.get('.page-heading').should('contain', 'My account');
});

/**
 * Valida a mensagem de boas-vindas
 */
Then('eu devo ver a mensagem de boas-vindas', () => {
  cy.get('.info-account').should('be.visible');
  cy.get('.account').should('be.visible');
});

/**
 * Valida a mensagem de erro de autenticação
 */
Then('eu devo ver uma mensagem de erro de autenticação', () => {
  cy.get('.p').should('be.visible');
  cy.get('.p').should('contain', 'Your email or password is incorrect!');
});
