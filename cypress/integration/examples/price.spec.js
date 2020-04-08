/// <reference types="cypress" />

const urls = ['https://getlabor.com.br/']

describe('Teste o Labor por 30 dias gratuitamente!', () => {

  beforeEach(() => {
    cy.visit('https://getlabor.com.br/')
  })

  it('contains "Comece gratuitamente "', () => {
    cy.get('[href="https://app.getlabor.com.br/cadastrar"]').contains("Comece Gratuitamente")
  })
})
