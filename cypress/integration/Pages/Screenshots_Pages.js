class Screenshots_Pages {


    getEvidenciaPalavraChave() {

        return cy.screenshot('Palavra Chave', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarTextoPalavraChave() {

        return cy.screenshot('Validar texto Palavra Chave', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaLimparTextoPalavraChave() {

        return cy.screenshot('Limpar Texto Palavra Chave', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaClearPalavraChave() {

        return cy.screenshot('Validar Clear Palavra Chave', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaPesquisaAvancada() {

        return cy.screenshot('Pesquisa Avançada', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarTextoPesquisaAvancada() {

        return cy.screenshot('Validar texto Pesquisa Avançada', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaLimparTextoPesquisaAvancada() {

        return cy.screenshot('Limpar texto Pesquisa Avançada', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaClearPesquisaAvancada() {

        return cy.screenshot('Validar Clear Pesquisa Avançada', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaNumeroSequencial() {

        return cy.screenshot('Numero Sequencial', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarNumeroSequencial() {

        return cy.screenshot('Validar Numero Sequencial', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarNumeroSequencial2() {

        return cy.screenshot('Validar Numero Sequencial 2', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaLimparNumeroSequencial() {

        return cy.screenshot('Limpar Numero Sequencial', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaClearNumeroSequencial() {

        return cy.screenshot('Validar clear Numero Sequencial', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaUnicaLetra() {

        return cy.screenshot('Pesquisar Uma Unica Letra', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarTextoUnicaLetra() {

        return cy.screenshot('Validar Texto Unica Letra', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarSeContemLetraTexto() {

        return cy.screenshot('Validar se contem Letra', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaLimparUnicaLetra() {

        return cy.screenshot('Limpar Unica Letra', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaClearUnicaLetra() {

        return cy.screenshot('Clear Unica Letra', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaCampoEmBranco() {

        return cy.screenshot('Campo em Branco', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarTextoCampoEmBranco() {

        return cy.screenshot('Validar texto Campo em Branco', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }

    getEvidenciaValidarSeContemCampoEmBranco() {

        return cy.screenshot('Validar se contem Campo em Branco', { capture: 'viewport', clip: { x: 0, y: 0, width: 800, height: 600 } })

    }


}

module.exports = Screenshots_Pages