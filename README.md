# Framework de Automação - HCXpert

Framework de automação de testes Web e API desenvolvido com **Cypress** e **Cucumber** (BDD).

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)
- [Cenários de Teste](#cenários-de-teste)
- [Relatórios](#relatórios)
- [Boas Práticas Implementadas](#boas-práticas-implementadas)

## Tecnologias Utilizadas

- **Cypress** (v13.6.0) - Framework de automação de testes E2E
- **Cucumber** (@badeball/cypress-cucumber-preprocessor v20.0.0) - BDD (Behavior Driven Development)
- **JavaScript** - Linguagem de programação
- **Node.js** (v22.13.0) - Ambiente de execução

## Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **pnpm** (gerenciador de pacotes)
- **Git** (para controle de versão)

### Verificar instalação:

node --version
npm --version

## Instalação

### Passo 1: Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd hcxpert-automation-test
```

### Passo 2: Instalar as dependências

npm install


## Estrutura do Projeto

```
hcxpert-automation-test/
│
├── cypress/
│   ├── e2e/
│   │   ├── features/              # Arquivos .feature (cenários BDD)
│   │   │   ├── login.feature
│   │   │   ├── shopping.feature
│   │   │   └── api-trello.feature
│   │   │
│   │   └── step_definitions/      # Implementação dos steps
│   │       ├── login.steps.js
│   │       ├── shopping.steps.js
│   │       └── api.steps.js
│   │
│   ├── support/
│   │   ├── commands.js            # Comandos customizados
│   │   └── e2e.js                 # Configurações globais
│   │
│   ├── fixtures/                  # Dados de teste (JSON)
│   ├── screenshots/               # Screenshots de falhas
│   ├── videos/                    # Vídeos das execuções
│   └── reports/                   # Relatórios de teste
│
├── cypress.config.js              # Configuração do Cypress
├── .cypress-cucumber-preprocessorrc.json  # Config do Cucumber
├── package.json                   # Dependências do projeto
├── .gitignore                     # Arquivos ignorados pelo Git
└── README.md                      # Este arquivo
```

## Execução dos Testes

### Modo Interativo (Cypress UI)

Abre a interface gráfica do Cypress para executar e visualizar os testes:

npm run open

### Modo Headless (Terminal)

Executa todos os testes em modo headless (sem interface gráfica):

npm test

### Executar com navegador visível

npm run test:headed

### Executar em navegadores específicos


# Chrome
npm run test:chrome

# Firefox
npm run test:firefox


### Executar features específicas

# Apenas testes de login
npx cypress run --spec "cypress/e2e/features/login.feature"

# Apenas testes de API
npx cypress run --spec "cypress/e2e/features/api-trello.feature"


### Executar por tags

# Apenas testes smoke
npx cypress run --env tags="@smoke"

# Apenas testes de API
npx cypress run --env tags="@api"

## Cenários de Teste

### 1. Testes Web (login.feature)

-  Login com credenciais válidas
-  Login com credenciais inválidas

### 2. Testes Web (shopping.feature)

- Realizar busca de produto
- Adicionar produto ao carrinho
- Validar produtos no carrinho na tela de pagamento

### 3. Testes de API (api-trello.feature)

- Validar endpoint GET da API Trello
- Validar estrutura da resposta
- Exibir o campo "list.name"
- Validar status code 200

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes:

- **HTML Report**: `cypress/reports/html/index.html`
- **JSON Report**: `cypress/reports/cucumber-json/cucumber-report.json`
- **Screenshots**: `cypress/screenshots/` (apenas em caso de falhas)
- **Vídeos**: `cypress/videos/` (gravação completa da execução)

### Visualizar relatórios HTML

Após executar os testes, abra o arquivo HTML no navegador:

# Linux/Mac
open cypress/reports/html/index.html

# Windows
start cypress/reports/html/index.html


## Boas Práticas Implementadas

### 1. **BDD (Behavior Driven Development)**
   - Cenários escritos em Gherkin (linguagem natural)
   - Facilita a comunicação entre equipes técnicas e não técnicas
   - Cenários reutilizáveis e manuteníveis

### 2. **Page Object Model (Implícito)**
   - Comandos customizados encapsulam interações com elementos
   - Reduz duplicação de código
   - Facilita manutenção

### 3. **Separação de Responsabilidades**
   - Features separadas por funcionalidade
   - Step definitions organizados por contexto
   - Configurações centralizadas

### 4. **Tratamento de Erros**
   - Captura de exceções não tratadas
   - Screenshots automáticos em falhas
   - Vídeos das execuções para debugging

### 5. **Configurações Flexíveis**
   - Timeouts configuráveis
   - Suporte a múltiplos navegadores
   - Execução em diferentes modos (headed/headless)

### 6. **Logs e Debugging**
   - Logs detalhados no console
   - Exibição de valores de campos da API
   - Mensagens descritivas nos steps

### 7. **Versionamento**
   - .gitignore configurado
   - Estrutura pronta para CI/CD
   - Documentação completa


## Licença

Este projeto foi desenvolvido para fins de desenvolvimento técnico.
