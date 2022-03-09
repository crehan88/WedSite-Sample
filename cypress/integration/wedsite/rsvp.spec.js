describe('Wedsite App Visiter', () => {
  beforeEach(() => {
    cy.createTestData('fake name').then(() => {
      cy.loginvisiter('fake name').then(() => {
        cy.contains('RSVP').click()
      })
    })
  })

  it('Rsvp Yes', () => {
    cy.get('[name="email"]').click().type('fakeemail@email.com')
    cy.get('[name="response"]').select('yes')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'yes',
      'fakeemail@email.com'
    )
    cy.removeTestData('fake name')
  })

  it('Rsvp Yes, invalid email', () => {
    cy.get('[name="email"]').click().type('fakeemailemail.com')
    cy.get('[name="response"]').select('yes')
    cy.contains('Invalid email address')
    cy.removeTestData('fake name')
  })

  it('Rsvp Yes, no email', () => {
    cy.get('[name="response"]').select('yes')
    cy.contains('Email Required')
    cy.removeTestData('fake name')
  })

  it('Rsvp No', () => {
    cy.get('[name="email"]').click().type('fakeemail@email.com')
    cy.get('[name="response"]').select('no')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'no',
      'fakeemail@email.com'
    )
    cy.removeTestData('fake name')
  })

  it('Rsvp No, invalid email', () => {
    cy.get('[name="email"]').click().type('fakeemailemail.com')
    cy.get('[name="response"]').select('no')
    cy.contains('Invalid email address')
    cy.removeTestData('fake name')
  })

  it('Rsvp No,no email', () => {
    cy.get('[name="response"]').select('no')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'no',
      ''
    )
    cy.removeTestData('fake name')
  })

  it('Rsvp Maybe', () => {
    cy.get('[name="email"]').click().type('fakeemail@email.com')
    cy.get('[name="response"]').select('maybe')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'maybe',
      'fakeemail@email.com'
    )
    cy.removeTestData('fake name')
  })

  it('Rsvp Maybe, invalid email', () => {
    cy.get('[name="email"]').click().type('fakeemailemail.com')
    cy.get('[name="response"]').select('maybe')
    cy.contains('Invalid email address')
    cy.removeTestData('fake name')
  })

  it('Rsvp Maybe,no email', () => {
    cy.get('[name="response"]').select('maybe')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'maybe',
      ''
    )
    cy.removeTestData('fake name')
  })

  it('Rsvp update', () => {
    cy.get('[name="response"]').select('no')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated('fake name', 'no', '')
    cy.loginvisiter('fake name')
    cy.contains('RSVP').click()
    cy.get('button').should('have.text', 'Change RSVP').click()
    cy.get('[name="email"]').click().type('fake@email.com')
    cy.get('[name="response"]').select('yes')
    cy.get('button').click()
    cy.contains('Thank you for responding')
    cy.checkAdminUpdated(
      'fake name',
      'yes',
      'fake@email.com'
    )
    cy.removeTestData('fake name')
  })
})
