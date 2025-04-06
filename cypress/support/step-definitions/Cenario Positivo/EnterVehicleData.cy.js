import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('preencho o Vehicle Data com dados validos', () => {
    cy.criarCarro()
    cy.adicionarEnginePerfomance()
    cy.preencherData()
    cy.selecionarNumeroAssentos()
    cy.selecionarCombustivel()
    cy.preencherListPrice()
    cy.preencherPlacaAleatoria()
    cy.preencherAnnualMileage()
    cy.validarCamposObrigatorios()
})

And('clico no botão Next para avançar à proxima aba', () => {
    cy.clicarNextVD()
})