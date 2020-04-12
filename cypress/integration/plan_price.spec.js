// How to clear your local database
    // beforeEach(() => {
    //   cy.clearLocalStorage()
    // })

context('Planos', () => {

    context('verify all "Planos" cases', () => {
      beforeEach(() => {
        cy.visit('https://getlabor.com.br')
      })

        it('contains "Planos" field', () => {
          cy.get('[href="/planos"]').contains("Planos")
        })

    it('click on the button "entrar"', () => {
      cy.visit('https://getlabor.com.br')
      cy.contains('Planos').click({force: true})
    })

  })
})
