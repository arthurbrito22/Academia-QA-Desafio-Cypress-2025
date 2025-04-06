import { faker } from "@faker-js/faker"

const INPUT_EMAIL_VAL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USER = '#username'
const INPUT_PASS = '#password'
const INPUT_CONF_PASS = '#confirmpassword'
const INPUT_TEXT = '#Comments'
const BTN_SEND = '#sendemail'
const ALERT = '.sweet-alert'

Cypress.Commands.add('addEmail', () => {
    cy.get(INPUT_EMAIL_VAL).type(faker.internet.email())
})

Cypress.Commands.add('addTelefone', () => {
    cy.get(INPUT_PHONE).type(faker.string.numeric(11))
})

Cypress.Commands.add('adicionarUsername', () => {
    const username = faker.internet.userName();
    cy.get(INPUT_USER).type(username);
});

Cypress.Commands.add('adicionarSenha', () => {
    cy.get(INPUT_PASS).type(Cypress.env('senha'), {log: false});
});

Cypress.Commands.add('adicionarConfSenha', () => {
    cy.get(INPUT_CONF_PASS).type(Cypress.env('senha'), {log: false});
});


Cypress.Commands.add('adicionarTexto', () => {
  const texto = faker.lorem.paragraph();
  cy.get(INPUT_TEXT).type(texto);
})

Cypress.Commands.add('clicarSend', () => {
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validarSendAlert', () => {
    cy.wait(5500)
    cy.get(ALERT).should('be.visible')
})