# language: pt

Funcionalidade: Busca e adição de produtos ao carrinho
  Como um usuário do e-commerce
  Eu quero buscar produtos e adicioná-los ao carrinho
  Para realizar uma compra

  Contexto:
    Dado que estou na página inicial do site

  @smoke @busca
  Cenário: Realizar busca de produto
    Quando eu busco por "dress"
    Então eu devo ver resultados da busca
    E os resultados devem conter o termo "dress"

  @carrinho
  Cenário: Adicionar produto ao carrinho
    Quando eu busco por "dress"
    E eu adiciono o primeiro produto ao carrinho
    Então eu devo ver a confirmação de produto adicionado
    E eu acesso o carrinho
    E o produto deve estar no carrinho

  @carrinho @checkout
  Cenário: Validar produtos no carrinho na tela de pagamento
    Quando eu busco por "dress"
    E eu adiciono o primeiro produto ao carrinho
    E eu continuo comprando
    E eu busco por "t-shirt"
    E eu adiciono o primeiro produto ao carrinho
    E eu acesso o carrinho
    Então eu devo ver os produtos adicionados no carrinho
    E eu posso prosseguir para o checkout
