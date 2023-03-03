/// <reference types="cypress" />
const constantes = require('../support/constantes');

describe('Aserciones', () => {
    let loginData;

    before('Before', () => {
        cy.fixture("primerFixture").then(data => {
            loginData = data
        });
    });

    beforeEach("precondiciones", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(loginData.test1.loginData.usuario);
        cy.get('#pass').type(loginData.test1.loginData.contraseña);
        cy.contains('Log in').click();
        cy.get('#waitslink').click();
        cy.get('#wait').dblclick();
    })

    it('Espera estatica', () =>{
        cy.wait(10000);
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    });

    it('Validar primer mensaje', () =>{
        cy.get('#message', {timeout: constantes.TIMEOUT}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
    });

    it('Validar segundo mensaje', () =>{
        cy.get('#message', {timeout: constantes.TIMEOUT * 2}).should('have.text', 'You are a man of patience and have waited fifteen seconds');
    });

    it('Deberia verificar el mensaje utilizando el metodo creado en commands', () =>{
        cy.esperaCirculodeCarga();
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
    })
   
});