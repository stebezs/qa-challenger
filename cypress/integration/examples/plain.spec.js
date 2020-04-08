context('Planos', () => {

    context('verify all "Planos" cases', () => {
      beforeEach(() => {
        cy.visit('https://getlabor.com.br')
      })

        it('contains "Planos" field', () => {
          cy.get('[href="/planos"]').contains("Planos")
        })

    it('cy.location() - get window.location', () => {
        cy.visit('https://getlabor.com.br/planos')
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/planos/')
      })
    })
  })
})
