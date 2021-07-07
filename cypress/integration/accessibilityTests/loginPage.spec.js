describe('Login Page Accessibility', () => {

    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com')
        cy.injectAxe()
    })

    it('Login page accessibility test', () => {
            cy.checkA11y()
    })
})