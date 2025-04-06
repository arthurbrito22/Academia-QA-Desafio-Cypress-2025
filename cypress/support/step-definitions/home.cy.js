import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('estou na pagina home do Portal Tricentis', () => {
    cy.visit('/')
})

And('clico no botão Automobile validando o mesmo', () => {
    cy.acessarPageAutomobile()
})
