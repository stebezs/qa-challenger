context('Login', () => {

    context('verify if go on login page', () => {

    it('click on the button Entrar', () => {
      cy.visit('https://getlabor.com.br')
      cy.contains('Entrar').click({force: true})
    })

    it('if make login', () => {
        cy.get('[name="email"]').type('ui@email.com')
        cy.get('[name="password"]').type('123456')
        cy.contains('Entrar').click({force: true})
    })

  })
})
