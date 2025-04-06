import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('seleciono o Plano de seguro', () => {
    cy.selecionarPlano()
})

And('clico no botão Next', () => {
    cy.clicarNextQuote()
})