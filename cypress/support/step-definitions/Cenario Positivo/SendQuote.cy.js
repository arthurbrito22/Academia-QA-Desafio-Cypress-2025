import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Then('preencho o Formulario Final', () => {
    cy.addEmail()
    cy.addTelefone()
    cy.adicionarUsername()
    cy.adicionarSenha()
    cy.adicionarConfSenha()
    cy.adicionarTexto()
    cy.clicarSend()
})

And('valido o comentario enviado', () => {
    cy.validarSendAlert()
})