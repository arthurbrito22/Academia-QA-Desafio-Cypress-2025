import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


And('preencho todo o Insurant Data', () => {
    cy.addNome()
    cy.addSobrenome()
    cy.dataNascimento()
    cy.selecionarGeneroPorNome()
    cy.inserirEndereco()
    cy.selecionarPais()
    cy.inserirCEP()
    cy.inserirCidade()
    cy.selecionarCargo()
    cy.selecionarHobbies()
    cy.adicionarSite()
    cy.addFoto()
    cy.clicarNextIND()
})