class Barra_Pesquisa_Pages {

    getLupaPesquisa() {

        return cy.get('#search-open').click()

    }

    getEscreverPalavraChave() {

        return cy.get('.desktop-search > .search-form > label > .search-field').type('Produtos')

    }

    getClicarEmPesquisar() {

        return cy.get('.desktop-search > .search-form > .search-submit').click()

    }

    getValidarTextoPalavraChave() {

        return cy.get('.archive-title').should('include.text', 'Resultados da busca por: Produtos')

    }

    getLimparTextoPalavraChave() {

        return cy.get('.desktop-search > .search-form > label > .search-field').clear()

    }

    getValidarClearTextoPalavraChave() {

        return cy.get('.desktop-search > .search-form > label > .search-field').should('have.value', '')

    }

    getEscreverPesquisaAvancada() {

        return cy.get('.desktop-search > .search-form > label > .search-field').type('seus investimentos')

    }

    getValidarTextoPesquisaAvancada() {

        return cy.get('.archive-title').should('include.text', 'Resultados da busca por: seus investimentos')

    }

    getLimparTextoPesquisaAvancada() {

        return cy.get('.desktop-search').clear()

    }

    getValidarClearTextoPesquisaAvancada() {

        return cy.get('.desktop-search > .search-form > label > .search-field').should('have.value', '')

    }

    getEscreverNumeroSequencial() {

        return cy.get('.desktop-search > .search-form > label > .search-field').type('1234556')

    }

    getValidarTextoNumeroSequencial() {

        return cy.get('.entry-title').should('include.text', 'Nenhum resultado')

    }

    getValidarTextoNumeroSequencial_2() {

        return cy.get('.entry-content > p').should('include.text', 'Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.')

    }

    getLimparNumeroSequencial() {

        return cy.get('.desktop-search').clear()

    }

    getValidarClearNumeroSequencial() {

        return cy.get('.desktop-search > .search-form > label > .search-field').should('have.value', '')

    }

    getEscreverUmaUnicaLetra() {

        return cy.get('.desktop-search > .search-form > label > .search-field').type('p')

    }

    getValidarTextoUnicaLetra() {

        return cy.get('.archive-title').should('include.text', 'Resultados da busca por: p')

    }

    getValidarSeContemLetraNoTexto() {

        return cy.get('#post-3530 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a').contains('prepara')

    }

    getLimparUnicaLetra() {

        return cy.get('.desktop-search').clear()

    }

    getValidarClearUnicaLetra() {

        return cy.get('.desktop-search > .search-form > label > .search-field').should('have.value', '')

    }


    getEscreverCampoEmBranco() {

        return cy.get('.desktop-search > .search-form > label > .search-field')

    }

    getValidarTextoCampoEmBranco() {

        return cy.get('.archive-title').should('include.text', 'Resultados da busca por:')

    }

    getValidarSeContemCampoEmBranco() {

        return cy.get('#post-3535 > .meta-main-wrap').contains('13/09/2023')

    }



}

module.exports = Barra_Pesquisa_Pages