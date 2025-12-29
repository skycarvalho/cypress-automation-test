/**
 * Step Definitions para os cenários de testes de API
 * Implementa os passos definidos no arquivo api-trello.feature
 */

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Variável para armazenar a resposta da API
let apiResponse;

// ==========================================
// WHEN - Ações
// ==========================================

When('eu envio uma requisição GET para {string}', (url) => {
  cy.request({
    method: 'GET',
    url,
    failOnStatusCode: false
  }).then((response) => {
    apiResponse = response;

    cy.log(`Status Code: ${response.status}`);
    cy.log(`Response Body: ${JSON.stringify(response.body, null, 2)}`);
  });
});

// ==========================================
// THEN - Validações
// ==========================================

Then('o status code da resposta deve ser {int}', (expectedStatusCode) => {
  expect(apiResponse, 'API response').to.not.be.undefined;
  expect(apiResponse.status).to.equal(expectedStatusCode);
});

Then('o campo {string} deve existir na resposta', (fieldPath) => {
  expect(apiResponse, 'API response').to.not.be.undefined;

  const fields = fieldPath.split('.');
  let value = apiResponse.body;

  fields.forEach((field) => {
    expect(
      value,
      `Campo "${field}" não encontrado no caminho "${fieldPath}"`
    ).to.have.property(field);

    value = value[field];
  });

  cy.log(`Campo "${fieldPath}" existe na resposta`);
});

Then('eu devo exibir o valor do campo {string}', (fieldPath) => {
  expect(apiResponse, 'API response').to.not.be.undefined;

  const fields = fieldPath.split('.');
  let value = apiResponse.body;

  fields.forEach((field) => {
    expect(value).to.have.property(field);
    value = value[field];
  });

  cy.log(`Valor do campo "${fieldPath}": ${value}`);

  // Cria um alias para uso futuro
  cy.wrap(value).as('fieldValue');
});

Then('a resposta deve conter o campo {string}', (field) => {
  expect(apiResponse, 'API response').to.not.be.undefined;
  expect(apiResponse.body).to.have.property(field);
  cy.log(`Campo "${field}" encontrado na resposta`);
});
