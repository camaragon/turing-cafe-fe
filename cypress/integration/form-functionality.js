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
            cy.get('input:first').type('Cameron')
        })
    })

})