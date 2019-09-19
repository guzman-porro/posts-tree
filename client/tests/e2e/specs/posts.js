describe('Posts tests', () => {
    beforeEach(() => {
      cy.visit('/')

      cy.get('#groupedBy').select('location')
    })
  
    it('See posts', () => {
      cy.get('.parent-node-container').first()
        .then((parentNode) => {
          cy.wrap(parentNode).find('.children-posts').should('not.be.visible')
          cy.wrap(parentNode).find('.parent-node-title').click()
          cy.wrap(parentNode).find('.children-posts').should('be.visible')
        })  
    })
  
    it('Open a last post of San Francisco', () => {
      
      cy.get('.parent-node-container').first()
        .then((parentNode) => {
          cy.wrap(parentNode).find('.parent-node-title').click()
          cy.wrap(parentNode).find('.post-container').last()
            .then((lastPost) => {
              cy.wrap(lastPost).click()
              cy.wrap(lastPost).find('.post-info-container').should('be.visible')
              cy.wrap(lastPost).find('.post-info-date').should('not.contain', 'This week')
            })
        })  
    })
  
  })
  