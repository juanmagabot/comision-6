describe('Mocha', () => {
    const profesor = 'Fabrizio'
    it('primer test con mocha', () => {
        cy.log('Primer test primer log con' + profesor);
        cy.log('Primer test segundo log');
        cy.log({
            primer: 'primer',
            segundo: 'segundo',
            tercero: 'tercero'
        });
    });

    it.only('segundo test', () => {
        cy.log('segundo test');
    });

    describe('Segundo describe', () => {
        it('Primer test en el segundo describe', () => {
            cy.log(profesor)
        })
    })
});

it.skip('Tercer test', () => {
    cy.log('tercer test con');
});