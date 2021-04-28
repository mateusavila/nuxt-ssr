describe('Home', () => {
  it('Testando a home.', () => {
    cy.visit('/')

    cy.get('.hero-content img').should('have.length', 1)

  })
})
