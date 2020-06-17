describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Login, no input', () => {
    cy.contains('Sign In').click()
    cy.contains('Please choose an Username!')
    cy.contains('Please choose a password!')
  })

  it('Login, no password', () => {

    cy.get('input[id="username"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.contains('Sign In').click()
    cy.contains('Please choose a password!')
  })

  it('Login, no username', () => {

    cy.get('input[id="password"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.contains('Sign In').click()
    cy.contains('Please choose an Username!')
  })

  it('Login, wrong input', () => {
    cy.get('input[id="username"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.get('input[id="password"]')
      .type('coen')
      .should('have.value', 'coen')

    cy.contains('Sign In').click()
    cy.contains('Incorrect username or password, please try again.')
  })

  it('Login, succesful login', () => {
    cy.get('input[id="username"]')
      .type('coen')
      .should('have.value', 'coen')
    cy.get('input[id="password"]')
      .type('coen1234')
      .should('have.value', 'coen1234')

    cy.contains('Sign In').click()
    cy.url().should('include', '/day')
  })
})