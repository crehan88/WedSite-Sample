describe('Wedsite App', () => {
  it('Successful Sigin', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('fake name')
    cy.get('button').click()
    cy.contains('Wedding')
    cy.contains('Travel')
    cy.contains('RSVP')
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('fakeNAme ')
    cy.get('button').click()
    cy.contains('Wedding')
    cy.contains('Travel')
    cy.contains('RSVP')
  })

  it('Failed Sigin', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('fake name')
    cy.get('button').click()
    cy.contains('fake name')
  })

  it('Successful Admin SignIn', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('fakeadmin')
    cy.get('.password').type('fakepassword')
    cy.get('button').click()
    cy.contains('Wedding')
    cy.contains('Travel')
    cy.contains('RSVP')
  })

  it('Unsuccessful Admin SignIn', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('invalidfakeadmin')
    cy.get('.password').type('fakepassword')
    cy.get('button').click()
    cy.contains('invalidfakeadmin')
  })

  it('Unsuccessful Admin SignIn no password', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('input').type('fakeadmin')
    cy.get('button').click()
    cy.contains('admin')
  })
})
