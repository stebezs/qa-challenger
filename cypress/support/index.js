// ***********************************************************
// This example support/index.js is processed and
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

// Alternatively you can use CommonJS syntax:
// require('./commands')

import "cypress-localstorage-commands";

Cypress.Commands.add('loginAs', (UserEmail) => {
  cy.request({
    method: 'POST',
    url: "https://app.getlabor.com.br/cadastrar",
    body: {
      user: {
        email:'ui@email.com',
      }
    }
  })
    .its('body')
    .then((body) => {
      cy.setLocalStorage("accessToken", body.accessToken);
      cy.setLocalStorage("refreshToken", body.refreshToken);
    });
});
