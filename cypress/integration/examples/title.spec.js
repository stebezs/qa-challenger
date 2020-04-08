/// <reference types="cypress" />

describe('Check the title', () => {
  beforeEach(() => {
    cy.visit('https://getlabor.com.br/')
  })

  it('contains "Labor - Controle de Horas"', () => {
    cy.title().should('contain', 'Labor - Controle de Horas')
  })
})
