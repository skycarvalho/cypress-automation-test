# language: pt
Funcionalidade: Teste de API Trello
  Como um testador de API
  Eu quero validar a API do Trello
  Para garantir que os endpoints estão funcionando corretamente

  @api @smoke
  Cenário: Validar endpoint GET da API Trello
    Quando eu envio uma requisição GET para "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    Então o status code da resposta deve ser 200
    E o campo "data.list.name" deve existir na resposta
    E eu devo exibir o valor do campo "data.list.name"

  @api
  Cenário: Validar estrutura da resposta da API Trello
    Quando eu envio uma requisição GET para "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    Então o status code da resposta deve ser 200
    E a resposta deve conter o campo "id"
    E a resposta deve conter o campo "type"
    E a resposta deve conter o campo "data"
    E o campo "data.list" deve existir na resposta
