// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/Cenario Positivo/home.page'
import './pages/Cenario Positivo/EnterVehicleData.page'
import './pages/Cenario Positivo/InsurantData.page'
import './pages/Cenario Positivo/ProductData.page'
import './pages/Cenario Positivo/PriceOption.page'
import './pages/Cenario Positivo/SendQuote.page'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


import './commands'
import './pages/Cenario Negativo/home.page'
import './pages/Cenario Negativo/EnterVehicleData.page'
import './pages/Cenario Negativo/InsurantData.page'
import './pages/Cenario Negativo/ProductData.page'
import './pages/Cenario Negativo/PriceOption.page'
import './pages/Cenario Negativo/SendQuote.page'