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

    it('should have a form that takes in text on the form inputs', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.name-input').type('Cameron')
            cy.get('.date-input').type('01/14')
            cy.get('.time-input').type('8:00')
            cy.get('.number-input').type('7')
        })
    })

    it('should allow a user to enter the name for the reservation', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.name-input').type('Cameron')
        })
    })

    it('should allow a user to enter the date for the reservation', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.date-input').type('01/14')
        })
    })

    it('should allow a user to enter the time for the reservation', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.date-input').type('8:00')
        })
    })

    it('should allow a user to enter the number of guests for the reservation', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.number-input').type('7')
        })
    })

    it('should allow a user to create a new reservation card for their reservation', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.name-input').type('Cameron')
            cy.get('.date-input').type('01/14')
            cy.get('.time-input').type('8:00')
            cy.get('.number-input').type('7')
            cy.get('.form-button').click()
        })
    })

    it('should display the new reservation card created', () => {
        cy
        .get('.resy-form').within(() => {
            cy.get('.name-input').type('Cameron')
            cy.get('.date-input').type('01/14')
            cy.get('.time-input').type('8:00')
            cy.get('.number-input').type('7')
            cy.get('.form-button').click()
        })
        .get('.reservation-card:last').within(() => {
            cy.get('h2').contains('Cameron')
            cy.get('p').should('be.visible')
        })
    })

})