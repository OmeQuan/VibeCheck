describe('Day page', () => {

  it('Setup', () => {
    cy.visit('/#/login')
    cy.get('input[id="username"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.get('input[id="password"]')
      .type('coen1234')
      .should('have.value', 'coen1234')

    cy.contains('Sign In').click()
    cy.url().should('include', '/#/day')
  });

  it('Navigate new activity', () => {
    cy.get('[id="create-activity"').click()
    cy.url().should('include', '/#/activity/create')
    cy.get('[id="category"]')
      .select('School')
      .should('have.value', '2')
    cy.get('[id="duration"]')
      .type('04:00')
      .should('have.value', '04:00')
    cy.get('[id="remark"]')
      .type('cypress test')
      .should('have.value', 'cypress test')
    cy.get('[id="add-activity"]').click()
  });
})