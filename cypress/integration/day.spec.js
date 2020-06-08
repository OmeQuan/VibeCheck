describe('Day page', () => {
  beforeEach(() => {
    cy.visit('/#/login')
    cy.get('input[id="username"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.get('input[id="password"]')
      .type('coen1234')
      .should('have.value', 'coen1234')

    cy.contains('Sign In').click()
    cy.url().should('include', '/#/day')
  })

  it.only('Create day if no available.', () => {
    cy.wait(1000)
    cy.get('h1[id="title"]').then(elem => {
      console.log(elem.text())

      if (elem.text() == 'Start a new day') {
        cy.get('[id="create-day"]').click()
        cy.url().should('include', '/#/day/create')
        cy.get('[id="woke_up_time"]')
          .type('09:00')
          .should('have.value', '09:00')
        cy.get('[id="save-day"]').click()
        cy.get('[id="return"]').click()
        cy.url().should('include', '/#/day')
        cy.wait(1000)
        cy.contains('Your day so far')
      }
      else if (elem.text() == 'Your day so far') {
        cy.contains('Your day so far')
      }
    })
  })



})