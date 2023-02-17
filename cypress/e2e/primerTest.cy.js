/// <reference types="cypress" />

describe('Primer test', () => {
    let numero = Math.floor(Math.random() * 10000);
    it('Deberia registrarse satisfactoriamente en la aplicacion', () => {
        cy.visit('/');
        cy.get('#user').type('Pushingit');
        cy.get('#user').clear();
        cy.get('#user').type('Pushingit' + numero);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select(4);
        cy.get('#month').select('January');
        cy.get('#year').select(70);
        cy.get('#submitForm').click();
    });
});