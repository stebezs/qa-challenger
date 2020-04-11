const urls = ['https://getlabor.com.br/']

describe('Show inicial price', () => {

  beforeEach(() => {
    cy.visit('https://getlabor.com.br/')
  })

  it('contains "Comece gratuitamente "', () => {
    cy.get('[href="https://app.getlabor.com.br/cadastrar"]').contains("Comece Gratuitamente")
  })

})
