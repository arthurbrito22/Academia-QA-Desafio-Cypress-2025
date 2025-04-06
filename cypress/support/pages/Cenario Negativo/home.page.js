const BTN_AMOBILE = '#nav_automobile'
const SELECTED_INSU = '#selectedinsurance'

Cypress.Commands.add('acessarPageAutomobile', () => {
    cy.get(BTN_AMOBILE).click()
    cy.get(SELECTED_INSU).should('be.visible')
})