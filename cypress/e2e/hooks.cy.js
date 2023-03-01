/// <reference types="cypress" />

describe('Hooks', () => { 
    let usuarioTest1, contraseñaTest1, usuarioTest2, contraseñaTest2;

    before("Before", () =>{
        cy.log('generar datos de prueba')
        usuarioTest1 = 'pushingit';
        contraseñaTest1 = '123456!'
        usuarioTest2 = 'pushingit2'
        contraseñaTest2 = '123456!'
    });

    beforeEach('Before each', () =>{
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })
    
    it('Deberia ingresar al sistema con datos validos', () =>{
        cy.get('#user').type(usuarioTest1);
        cy.get('#pass').type(contraseñaTest1);
        cy.contains('Log in').click();
    });

    it('Deberia ingresar al sistema con otros datos validos', () =>{
        cy.get('#user').type(usuarioTest2);
        cy.get('#pass').type(contraseñaTest2);
        cy.contains('Log in').click();
    });

    afterEach('After each', () =>{
        cy.get('#logout').click();
    });

    after('After', () =>{
        cy.log('Enviar el reporte por mail');
    });
 });