describe('Contact List Page Accessibility', () => {

    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com')
        cy.intercept('GET', '**/contacts').as('getContacts')
        cy.get('#email').type('test@fake.com')
        cy.get('#password').type('foobarfoo')
        cy.get('#submit').click() 
        cy.wait('@getContacts')
        cy.injectAxe()
    })

    it('Contact list page accessibility test', () => {
        cy.checkA11y()
    })
})