const SELECT_MAKE = '#make'
const INPUT_KW = '#engineperformance'
const INPUT_DATE = '#dateofmanufacture'
const SELECT_SEATS = '#numberofseats'
const SELECT_FUEL = '#fuel'
const INPUT_PRICE = '#listprice'
const INPUT_PLATE = '#licenseplatenumber'
const INPUT_A_PRICE = '#annualmileage'
const BTN_NEXT_VD = '#nextenterinsurantdata'
const CHECK_VALIDATION = '.icon'

Cypress.Commands.add('criarCarro', () => {
    cy.get(SELECT_MAKE).find('option').then($options => { 
      const randomIndex = Cypress._.random(1, $options.length - 1) 
      const randomValue = $options[randomIndex].value 
      cy.get(SELECT_MAKE).select(randomValue)
    })
})

Cypress.Commands.add('adicionarEnginePerfomance', () => {
    const ValorAleatorio = Cypress._.random(50, 500)
    cy.get(INPUT_KW).type(`${ValorAleatorio}`)
})

Cypress.Commands.add('preencherData', () => {
    const mes = Cypress._.random(1, 12).toString().padStart(2, '0')
    const dia = Cypress._.random(1, 28).toString().padStart(2, '0')
    const ano = Cypress._.random(1990, 2024)
  
    const data = `${mes}/${dia}/${ano}`
    cy.get(INPUT_DATE).type(data)
})

Cypress.Commands.add('selecionarNumeroAssentos', () => {
  cy.get(SELECT_SEATS).find('option').then($options => {
    const randomIndex = Cypress._.random(1, $options.length - 1)
    const randomValue = $options[randomIndex].value
    cy.get(SELECT_SEATS).select(randomValue)
  })
})

Cypress.Commands.add('selecionarCombustivel', () => {
    cy.get(SELECT_FUEL).find('option').then($options => {
      const random = Cypress._.random(1, $options.length - 1)
      cy.get(SELECT_FUEL).select($options[random].value)
    })
})

Cypress.Commands.add('preencherListPrice', () => {
    const numero = Cypress._.random(500, 100000)
    cy.get(INPUT_PRICE).type(`${numero}`)
})

Cypress.Commands.add('preencherPlacaAleatoria', () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeros = '0123456789'
  
    const placa = 
      letras.charAt(Cypress._.random(0, 25)) +
      letras.charAt(Cypress._.random(0, 25)) +
      letras.charAt(Cypress._.random(0, 25)) +
      numeros.charAt(Cypress._.random(0, 9)) +
      letras.charAt(Cypress._.random(0, 25)) +
      numeros.charAt(Cypress._.random(0, 9)) +
      numeros.charAt(Cypress._.random(0, 9))
  
    cy.get(INPUT_PLATE).type(placa)
})

Cypress.Commands.add('preencherAnnualMileage', () => {
    const numero = Cypress._.random(100, 100000)
    cy.get(INPUT_A_PRICE).type(`${numero}`)
})

Cypress.Commands.add('clicarNextVD', () => {
    cy.get(BTN_NEXT_VD).click()
})

Cypress.Commands.add('validarCamposObrigatorios', () => {
    cy.get(CHECK_VALIDATION).should('be.visible')
})