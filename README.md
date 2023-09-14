# TesteAgibank
Esse Teste tem como url base a https://blogdoagi.com.br/ e visa testar a 'Lupa de Pesquisa', localizada no canto superior esquerdo. Sendo assim, extraindo alguns cenários.

# Framework de Teste no padrão PageObject
Esse Teste foi desenvolvido em JavaScript utilizando a Framework Cypress, sendo composto pelas principais class :

- Pages: Onde esta situada todas as pages utilizadas para o teste
    1)Barra_Pesquisa_Pages ( onde esta todas as pages da pesquisa completa )
    2) Screenshots_Pages ( onde esta todas as pages para tirar screenshots )
    3)URL_Pages ( onde esta todas a page que visita o blog )
- ScriptDeTeste: Onde esta situado os scripts de teste
    4)Teste_Pesquisa_Evidencias ( Onde esta o script que roda o teste com evidencias, quando executado ele salva na folder screenshot\ScriptsDeteste\Teste_Pesquisa_evidencias )
    5) Teste_Pesquisa_Validacao ( Onde esta o script que roda o teste para validação, que ocorre de forma mais rápida sem a interrupção do screenshot )

  * Para rodar o script de teste utilizar o comando npx cypress open
  
