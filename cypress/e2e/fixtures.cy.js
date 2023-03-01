/// <reference types="cypress" />

describe('Fixtures', () => {
    let loginData;

    before("Before", () => {
        cy.fixture('primerFixture').then(data => {
            loginData = data;
        });
    });

    beforeEach('Before each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia ingresar al sistema con datos validos y agregar una tarea', () => {
        cy.get('#user').type(loginData.test1.loginData.usuario);
        cy.get('#pass').type(loginData.test1.loginData.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
        cy.get('#task').type(`${loginData.test1.tareas.tarea} {enter}`);
    });

    it('Deberia ingresar al sistema con otros datos validos, agregar una tarea y eliminarla', () => {
        cy.get('#user').type(loginData.test2.usuario);
        cy.get('#pass').type(loginData.test2.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
        cy.get('#task').type(`${loginData.test2.tarea} {enter}`);
        cy.contains(loginData.test2.tarea).siblings('button');
    });
});