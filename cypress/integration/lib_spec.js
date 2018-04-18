describe('lib', () => {
  it('should listen to changes based on the given query', () => {
    cy.visit('/')

    cy.viewport(700, 800)
    cy.get('div[data-test="match"]').should('have.length', 0)
    cy.get('div[data-test="no-match"]').should('have.length', 1)

    cy.viewport(600, 800)
    cy.get('div[data-test="match"]').should('have.length', 1)
    cy.get('div[data-test="no-match"]').should('have.length', 0)
  })

  it('should keep working if a new query is given', () => {
    cy.visit('/')
    cy.viewport(700, 800)
    cy.get('div[data-test="match"]').should('have.length', 0)
    cy.get('div[data-test="no-match"]').should('have.length', 1)

    cy.get('button').click()
    cy.get('div[data-test="match"]').should('have.length', 1)
    cy.get('div[data-test="no-match"]').should('have.length', 0)
  })
})
