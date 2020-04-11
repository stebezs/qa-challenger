context('Cadastrar', () => {

    context('verify if show a message when subimit without data', () => {
      // beforeEach(() => {
      //   cy.visit('https://getlabor.com.br')
      // })
    it('click on the button Cadastrar', () => {
      cy.visit('https://app.getlabor.com.br/cadastrar')
      cy.contains('Cadastrar').click({force: true})
    })

    it('show a message error', () => {
      cy.get('[class="css-rmt2c8 e4p6sj52"]').contains("Campo obrigatório")
      cy.get('[class="css-rmt2c8 e1nk4wcv2"]').contains("Campo obrigatório")
    })

  })
})
