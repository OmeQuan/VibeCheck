describe('My First Test', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:8080/#/login')
  })
})