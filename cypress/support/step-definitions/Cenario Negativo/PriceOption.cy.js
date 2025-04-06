import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('valido que é necessario preencher todos os campos para prosseguir', () => {
    cy.validarCenario()
})
// And('seleciono o Plano de seguro2', () => {
//     cy.selecionarPlano()
// })

// And('clico no botão Next2', () => {
//     cy.clicarNextQuote()
// })