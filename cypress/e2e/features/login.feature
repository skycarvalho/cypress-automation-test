# language: pt
Funcionalidade: Login no sistema
  Como um usuário do sistema
  Eu quero realizar login
  Para acessar minha conta

  Contexto:
    Dado que estou na página de login

  @smoke @login
  Cenário: Login com credenciais válidas
    Quando eu preencho o email "teste2021@teste.com.br"
    E eu preencho a senha "teste"
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página de conta
    E eu devo ver a mensagem de boas-vindas

  @login @negativo 
  Cenário: Login com credenciais inválidas
    Quando eu preencho o email "usuario@invalido.com"
    E eu preencho a senha "senhaerrada"
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro de autenticação
