import { faker } from '@faker-js/faker'

const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTH_DATE = '#birthdate'
const INPUT_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const OCCUPATION = '#occupation'
const CHECK_BOX = '.group'
const INPUT_SITE = '#website'
const BTN_NEXT_IND = '#nextenterproductdata'

Cypress.Commands.add('addNome', () => {
    cy.get(INPUT_FIRST_NAME).type(faker.person.firstName())
})

Cypress.Commands.add('addSobrenome', () => {
    cy.get(INPUT_LAST_NAME).type(faker.person.lastName().replace('-','').replace(' ', ''))
})

Cypress.Commands.add('dataNascimento', () => {
    const mes = Cypress._.random(1, 12).toString().padStart(2, '0')
    const dia = Cypress._.random(1, 28).toString().padStart(2, '0')
    const ano = Cypress._.random(1960, 2003)
  
    const data = `${mes}/${dia}/${ano}`
    cy.get(INPUT_BIRTH_DATE).type(data)
})
  
Cypress.Commands.add('selecionarGeneroPorNome', () => {
    const genero = faker.person.sex()
  
    if (genero === 'male') {
      cy.contains('.group label', 'Male').click()
    } else {
      cy.contains('.group label', 'Female').click()
    }
})

Cypress.Commands.add('inserirEndereco', () => {
  cy.get(INPUT_ADDRESS).type(faker.location.streetAddress())
})

Cypress.Commands.add('selecionarPais', () => {
  cy.get(SELECT_COUNTRY).find('option').then($options => { 
    const randomIndex = Cypress._.random(1, $options.length - 1) 
    const randomValue = $options[randomIndex].value 
    cy.get(SELECT_COUNTRY).select(randomValue)
  })
})

Cypress.Commands.add('inserirCEP', () => {
  const zip = faker.string.numeric(8)
  cy.get(INPUT_ZIP_CODE).type(zip)
})

Cypress.Commands.add('inserirCidade', () => {
  cy.get(INPUT_CITY).type(faker.location.city())
})

Cypress.Commands.add('selecionarCargo', () => {
  cy.get(OCCUPATION).find('option').then($options => { 
    const randomIndex = Cypress._.random(1, $options.length - 1) 
    const randomValue = $options[randomIndex].value 
    cy.get(OCCUPATION).select(randomValue)
  })
})

Cypress.Commands.add('selecionarHobbies', () => {
  cy.get(`${CHECK_BOX} input[type="checkbox"]`).then($checkboxes => {
    const selecionados = Cypress._.sampleSize($checkboxes.toArray(), 2)

    selecionados.forEach(checkbox => {
      cy.wrap(checkbox).check({ force: true })
    })
  })
})

Cypress.Commands.add('adicionarSite', () => {
  cy.get(INPUT_SITE).type(faker.internet.url())
})

Cypress.Commands.add('addFoto', () => {
  cy.get('[type="file"]').selectFile(
    "cypress/assets/Accenture-Logo.png",
    { force: true }
  )
})

Cypress.Commands.add('clicarNextIND', () => {
  cy.get(BTN_NEXT_IND).click()
})