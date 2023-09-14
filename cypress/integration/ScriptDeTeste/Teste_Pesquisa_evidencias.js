
import Barra_Pesquisa_Pages from "../Pages/Barra_Pesquisa_Pages";
import URL_Pages from "../Pages/URL_Pages";
import Screenshots_Pages from "../Pages/Screenshots_Pages";

context('Agi- Login', () => {

   const pages = new Barra_Pesquisa_Pages
   const site = new URL_Pages
   const evidencias = new Screenshots_Pages

   describe('Teste Barra de Pesquisa ', function () {
      it('Pesquisa de artigos por palavras-chave', function () {

         // CENÁRIO 01 - Pesquisa de artigos por palavras-chave
         // Os usuários podem inserir palavras-chave relacionadas ao tópico que desejam encontrar no blog e receber uma lista de artigos relevantes e obter sucesso.
         site.getUrlSite()
         pages.getLupaPesquisa()
         pages.getEscreverPalavraChave()
         evidencias.getEvidenciaPalavraChave()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoPalavraChave()
         evidencias.getEvidenciaValidarTextoPalavraChave()
         pages.getLupaPesquisa()
         pages.getLimparTextoPalavraChave()
         evidencias.getEvidenciaLimparTextoPalavraChave()
         pages.getValidarClearTextoPalavraChave()
         evidencias.getEvidenciaClearPalavraChave()

      })

      it('Filtros de pesquisa avançada', function () {

         // CENÁRIO 02 - Filtros de pesquisa avançada
         // Os usuários podem ter a opção de refinar sua pesquisa usando filtros, como data de publicação, autor, categoria do artigo, tags, etc e obter sucesso.

         pages.getEscreverPesquisaAvancada()
         evidencias.getEvidenciaPesquisaAvancada()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoPesquisaAvancada()
         evidencias.getEvidenciaValidarTextoPesquisaAvancada()
         pages.getLupaPesquisa()
         pages.getLimparTextoPesquisaAvancada()
         evidencias.getEvidenciaLimparTextoPesquisaAvancada()
         pages.getValidarClearTextoPesquisaAvancada()
         evidencias.getEvidenciaClearPesquisaAvancada()


      })

      it('Pesquisa com numeros sequenciais', function () {

         // CENÁRIO 03 - Pesquisa com numeros sequenciais
         // Os usuários digitam numeros sequenciais erroniamente, entao nao obtem sucesso na pesquisa

         pages.getEscreverNumeroSequencial()
         evidencias.getEvidenciaNumeroSequencial()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoNumeroSequencial()
         evidencias.getEvidenciaValidarNumeroSequencial
         pages.getValidarTextoNumeroSequencial_2()
         evidencias.getEvidenciaValidarNumeroSequencial2()
         pages.getLupaPesquisa()
         pages.getLimparNumeroSequencial()
         evidencias.getEvidenciaLimparNumeroSequencial()
         pages.getValidarClearNumeroSequencial()
         evidencias.getEvidenciaClearNumeroSequencial()

      })

      it('Pesquisa com uma unica letra', function () {

         // CENÁRIO 04 - Pesquisa com uma unica letra
         // Os usuários digitam uma unica letra e obtem todos os conteudos que tenham palavras com a letra pesquisada

         pages.getEscreverUmaUnicaLetra()
         evidencias.getEvidenciaUnicaLetra
         pages.getClicarEmPesquisar()
         pages.getValidarTextoUnicaLetra()
         evidencias.getEvidenciaValidarTextoUnicaLetra()
         pages.getValidarSeContemLetraNoTexto()
         evidencias.getEvidenciaValidarSeContemLetraTexto()
         pages.getLupaPesquisa()
         pages.getLimparUnicaLetra()
         evidencias.getEvidenciaLimparUnicaLetra
         pages.getValidarClearUnicaLetra()
         evidencias.getEvidenciaClearUnicaLetra

      })

      it('Pesquisa com campo em branco', function () {

         // CENÁRIO 05 - Pesquisa com campo em branco
         // Os usuários não digitam nada no campo ded pesquisa e ele traz todo conteudo do blog como opção

         pages.getEscreverCampoEmBranco()
         evidencias.getEvidenciaCampoEmBranco()
         pages.getClicarEmPesquisar()
         pages.getValidarTextoCampoEmBranco()
         evidencias.getEvidenciaValidarTextoCampoEmBranco()
         pages.getValidarSeContemCampoEmBranco()
         evidencias.getEvidenciaValidarSeContemCampoEmBranco()

      })

   })

})



