describe('Reservation Display', () => {
    const baseUrl = 'http://localhost:3000/?name=&date=&time=&number=';

    it('should be able to visit the base url and see the homepage', () => {
        cy
        .visit(baseUrl)
        .location()
    });

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('should have a page title', () => {
        cy
        .get('h1')
        .contains('Turing Cafe Reservations')
    });

    it('should have a form section with inputs and a button', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('input').should('be.visible');
            cy.get('.form-button').should('be.visible').contains('Make Reservation')
        })
    });

    it('should display a grid of reservation cards', () => {
        cy
        .get('.resy-container').within(() => {
            cy.get('.reservation-card').should('be.visible')
        })
    })

    it('should display the guest\'s reservation information on the card', () => {
        cy
        .get('.reservation-card').within(() => {
            cy.get('h2').contains('Christie')
            cy.get('p').should('be.visible')
            cy.get('button').should('be.visible').contains('Cancel')
        })
    })
})