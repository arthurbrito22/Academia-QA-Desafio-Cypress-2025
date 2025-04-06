import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('preencho o Product Data', () => {
    cy.dataInicio()
    cy.selecionarCoberturaSeguro()
    cy.selecionarMerito()
    cy.selecionarInsuranceD()
    cy.selecionarProdutos()
    cy.selecionarCortesia()
    cy.clicarNextPO()
})