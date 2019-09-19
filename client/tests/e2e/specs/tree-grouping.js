describe('Grouping tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Welcome alert', () => {
    cy.get('.alert-info')
      .contains('This is the posts tree, check it out! Use the dropdown below to change the grouping :');
  })

  it('Tree parent nodes', () => {
    cy.get('.parent-node-container').should('have.length', 3)
  })

  it('Change grouping to location', () => {
    cy.get('#groupedBy').select('location')
    cy.get('.parent-node-container').contains('San Francisco')
    cy.get('.parent-node-container').should('not.contain', 'London')
  })
})
