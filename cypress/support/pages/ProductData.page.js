const INPUT_START_DATE = '#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELECT_D_INSURANCE = '#damageinsurance'
const CHECK_BOX2 = '.idealforms-field-checkbox'
const SELECT_COURTESYC = '#courtesycar'
const BTN_NEXT_P_OPTION = '#nextselectpriceoption'

Cypress.Commands.add('dataInicio', () => {
    const mes = Cypress._.random(5, 12).toString().padStart(2, '0')
    const dia = Cypress._.random(1, 28).toString().padStart(2, '0')
    const ano = Cypress._.random(2025, 2035)
  
    const data = `${mes}/${dia}/${ano}`
    cy.get(INPUT_START_DATE).type(data)
})

Cypress.Commands.add('selecionarCoberturaSeguro', () => {
    cy.get(SELECT_INSURANCE_SUM).find('option').then($options => { 
      const randomIndex = Cypress._.random(1, $options.length - 1) 
      const randomValue = $options[randomIndex].value 
      cy.get(SELECT_INSURANCE_SUM).select(randomValue)
    })
})

Cypress.Commands.add('selecionarInsuranceD', () => {
    cy.get(SELECT_MERIT_RATING).find('option').then($options => { 
      const randomIndex = Cypress._.random(1, $options.length - 1) 
      const randomValue = $options[randomIndex].value 
      cy.get(SELECT_MERIT_RATING).select(randomValue)
    })
})
  
Cypress.Commands.add('selecionarMerito', () => {
    cy.get(SELECT_D_INSURANCE).find('option').then($options => { 
      const randomIndex = Cypress._.random(1, $options.length - 1) 
      const randomValue = $options[randomIndex].value 
      cy.get(SELECT_D_INSURANCE).select(randomValue)
    })
})

Cypress.Commands.add('selecionarProdutos', () => {
        const options = ['#EuroProtection', '#LegalDefenseInsurance']
        const randomIndex = Math.floor(Math.random() * options.length)
    cy.get(options[randomIndex]).check({ force: true })
    cy.get(options[randomIndex]).should('be.checked')
})

Cypress.Commands.add('selecionarCortesia', () => {
    cy.get(SELECT_COURTESYC).find('option').then($options => { 
      const randomIndex = Cypress._.random(1, $options.length - 1) 
      const randomValue = $options[randomIndex].value 
      cy.get(SELECT_COURTESYC).select(randomValue)
    })
})

Cypress.Commands.add('clicarNextPO', () => {
    cy.get(BTN_NEXT_P_OPTION).click()
  })