const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    // Configuração base do Cypress
    baseUrl: 'http://automationpractice.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Configuração de vídeos e screenshots
    video: true,
    screenshotOnRunFailure: true,
    
    // Especificação dos arquivos de feature do Cucumber
    specPattern: 'cypress/e2e/features/**/*.feature',
    
    // Configuração do preprocessor do Cucumber
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Task para exibir logs no terminal
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },
  },
});
