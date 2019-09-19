describe('Update tree tests', () => {
    beforeEach(() => {
      cy.visit('/')
        
      // Add new location
      cy.get('#groupedBy').select('location')
      cy.get('.parent-node-container').first()
        .then((parentNode) => {
            // Alias to use later on
            cy.wrap(parentNode).as('sanFranciscoGroup');
            cy.wrap(parentNode).find('.parent-node-title').click()
            cy.wrap(parentNode).find('.post-container').last()
                .then((lastPost) => {
                    cy.wrap(lastPost).click()
                    cy.wrap(lastPost).find('.post-info-container').should('be.visible')
                    cy.wrap(lastPost).find('.post-info-location').clear()
                    cy.wrap(lastPost).find('.post-info-location').type('Montevideo')
                    cy.wrap(lastPost).find('.btn-outline-primary').click()
            })
        })
    })
  
    it('Checking parent nodes', () => {
        cy.get('.parent-node-container').should('not.have.length', 3)
        cy.get('.parent-node-container').should('have.length', 4)
    })

    it('San francisco posts', () => {
        cy.get('@sanFranciscoGroup').first()
            .find('.post-container').should('have.length', 2)

    })
  
  })
  