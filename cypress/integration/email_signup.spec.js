
context('Cadastrar', () => {

    context('verify if show a message when subimit without data', () => {

    it('click on the button Cadastrar', () => {
      
      cy.visit('https://app.getlabor.com.br/cadastrar')
      cy.get('[name="name"]').type('teste')
      cy.get('[name="segment"]').select('Audiovisual')
      cy.get('[name="email"]').type('ui@email.com')
      cy.get('[name="password"]').type('ui@email.com')

      cy.contains('Cadastrar').click({force: true})

      cy.get('[class="e1w0gikl6 css-ppdfer e5387b70"]').contains("Already registered!")



    })

  })
})
