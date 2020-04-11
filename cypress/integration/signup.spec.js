context('Sign up message', () => {

    context('verify if show a message when subimit without data', () => {

      beforeEach(() => {
        cy.clearLocalStorage()
      })

    it('click on the button Cadastrar', () => {
      cy.visit('https://app.getlabor.com.br/cadastrar')
      cy.get('[name="name"]').type('teste')
      cy.get('[name="segment"]').select('Audiovisual')
      cy.get('[name="email"]').type('oi@email.com')
      cy.get('[name="password"]').type('12345')

      cy.contains('Cadastrar').click({force: true})
    })

  })
})
