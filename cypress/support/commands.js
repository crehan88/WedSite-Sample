// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginvisiter', (name) => {
  cy.visit('http://localhost:3000/')
  cy.get('button').click()
  cy.get('input').type(name)
  cy.get('button').click()
})

Cypress.Commands.add('loginadmin', () => {
  cy.visit('http://localhost:3000/')
  cy.get('button').click()
  cy.get('input').type('fakeadmin')
  cy.get('.password').type('fakepassword')
  cy.get('button').click()
})

Cypress.Commands.add('createTestData', (name) => {
  cy.visit('http://localhost:3000/')
  cy.get('button').click()
  cy.get('input').type('fakeadmin')
  cy.get('.password').type('fakepassword')
  cy.get('button').click()
  cy.contains('RSVP').click()
  cy.contains('Add Invite').click()
  cy.get('input').type(name)
  cy.get('button').contains('Add').click()
  cy.contains(name)
})

Cypress.Commands.add('removeTestData', (name) => {
  cy.visit('http://localhost:3000/')
  cy.get('button').click()
  cy.get('input').type('fakeadmin')
  cy.get('.password').type('fakepassword')
  cy.get('button').click()
  cy.contains('RSVP').click()
  cy.contains(name).click()
  cy.contains('Remove Invite').click()
  cy.contains('Add Invite')
})

Cypress.Commands.add('checkAdminUpdated',(name,response,email) => {
  cy.visit('http://localhost:3000/')
  cy.loginadmin()
  cy.contains('RSVP').click()
  cy.contains(name).click()
  cy.get('[name="name"]').should('have.value',name)
  cy.get('[name="response"]').should('have.value',response)
  cy.get('[name="email"]').should('have.value',email)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
