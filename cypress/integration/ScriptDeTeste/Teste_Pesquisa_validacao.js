
import Barra_Pesquisa_Pages from "../Pages/Barra_Pesquisa_Pages";
import URL_Pages from "../Pages/URL_Pages";

context('Agi- Login', () => {

   const pages = new Barra_Pesquisa_Pages
   const site = new URL_Pages

   describe('Teste Barra de Pesquisa ', function () {
      it('Pesquisa de artigos por palavras-chave', function () {

         // CENÁRIO 01 - Pesquisa de artigos por palavras-chave
         // Os usuários podem inserir palavras-chave relacionadas ao tópico que desejam encontrar no blog e receber uma lista de artigos relevantes e obter sucesso.
         site.getUrlSite()
         pages.getLupaPesquisa()
         pages.getEscreverPalavraChave()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoPalavraChave()
         pages.getLupaPesquisa()
         pages.getLimparTextoPalavraChave()
         pages.getValidarClearTextoPalavraChave()
         

      })

      it('Filtros de pesquisa avançada', function () {

         // CENÁRIO 02 - Filtros de pesquisa avançada
         // Os usuários podem ter a opção de refinar sua pesquisa usando filtros, como data de publicação, autor, categoria do artigo, tags, etc e obter sucesso.

         pages.getEscreverPesquisaAvancada()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoPesquisaAvancada()
         pages.getLupaPesquisa()
         pages.getLimparTextoPesquisaAvancada()
         pages.getValidarClearTextoPesquisaAvancada()


      })

      it('Pesquisa com numeros sequenciais', function () {

         // CENÁRIO 03 - Pesquisa com numeros sequenciais
         // Os usuários digitam numeros sequenciais erroniamente, entao nao obtem sucesso na pesquisa

         pages.getEscreverNumeroSequencial()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoNumeroSequencial()
         pages.getValidarTextoNumeroSequencial_2()
         pages.getLupaPesquisa()
         pages.getLimparNumeroSequencial()
         pages.getValidarClearNumeroSequencial()

      })

      it('Pesquisa com uma unica letra', function () {

         // CENÁRIO 04 - Pesquisa com uma unica letra
         // Os usuários digitam uma unica letra e obtem todos os conteudos que tenham palavras com a letra pesquisada

         pages.getEscreverUmaUnicaLetra()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoUnicaLetra()
         pages.getValidarSeContemLetraNoTexto()
         pages.getLupaPesquisa()
         pages.getLimparUnicaLetra()
         pages.getValidarClearUnicaLetra()

      })

      it('Pesquisa com campo em branco', function () {

         // CENÁRIO 05 - Pesquisa com campo em branco
         // Os usuários não digitam nada no campo ded pesquisa e ele traz todo conteudo do blog como opção

         pages.getEscreverCampoEmBranco()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoCampoEmBranco()
         pages.getValidarSeContemCampoEmBranco()

      })

   })

})



