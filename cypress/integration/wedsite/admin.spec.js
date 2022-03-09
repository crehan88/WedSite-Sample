describe('Wedsite App Admin', () => {
  it('Add Invite', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.contains('Add Invite').click()
      cy.get('input').type('fake name')
      cy.get('button').contains('Add').click()
      cy.contains('fake name')
    })
  })

  it('Add Invite, Already added', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.contains('Add Invite').click()
      cy.get('input').type('fake name')
      cy.get('button').contains('Add').click()
      cy.contains('fake name')
    })
  })

  it('Search Invite', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.get('input').type('fake name')
      cy.contains('fake name')
    })
  })

  it('View Individual', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.contains('fake name').click()
    })
  })

  it('Edit Invite', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.contains('fake name').click()
      cy.contains('Edit').click()
      cy.get('input[name="name"]').click().type('{backspace}{backspace}')
      cy.contains('Save').click()
      cy.contains('fake na')
    })
  })

  it('Remove Invite', () => {
    cy.loginadmin().then(() => {
      cy.contains('RSVP').click()
      cy.contains('fake na').click()
      cy.contains('Remove Invite').click()
    })
  })
})
