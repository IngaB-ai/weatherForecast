describe('My First Test', () => {

  const label = "Location"
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.url().should('contain', '/forecast')
    cy.get('#name').type('Vilnius')
    cy.get("button").click();
    cy.get("h1.title").should("contain.text", "Vilnius");
    cy.contains(label)

  })
})
