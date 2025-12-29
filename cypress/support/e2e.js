// ***********************************************************
// Arquivo de suporte principal do Cypress
// É carregado automaticamente antes dos arquivos de teste
// ***********************************************************

// Importar comandos customizados
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


