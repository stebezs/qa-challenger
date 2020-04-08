context('Entrar', () => {

    context('verify all "Entrar" cases', () => {
      beforeEach(() => {
        cy.visit('https://getlabor.com.br')
      })

        it('contains "Entrar" field', () => {
          cy.get('[href="https://app.getlabor.com.br/entrar"]').contains("Entrar")
        })

    it('cy.location() - get window.location', () => {
        cy.visit('https://app.getlabor.com.br/entrar')
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/entrar')
      })
    })
  })
})
