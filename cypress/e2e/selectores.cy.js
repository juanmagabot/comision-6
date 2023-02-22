/// <reference types="cypress" />

describe('Selectores', () => {
    it('Encontrando los selectores', () => {
        cy.visit('');
        cy.get('button').should('exist');
        cy.get('[id="user"]').should('exist');
        cy.get('#user').should('exist');
        cy.get('input#user').should('exist');
        cy.get('input[id="user"]').should('exist');
        cy.get('.password').should('exist');
        cy.get('[class="chakra-input password css-1ekf6i8"]').should('exist');
        cy.get('input.password').should('exist');
        cy.get('input[class="chakra-input password css-1ekf6i8"]').should('exist');
    });

    it('Utilizando el metodo find', () => {
        cy.visit('');
        cy.get('fieldset').find('input').should('exist')
    })

    it('Utilizando el metodo children', () => {
        cy.visit('');
        cy.get('label').children('input[value="Male"]').should('exist')
    })

    it('Utilizando el metodo parent', () => {
        cy.visit('');
        cy.get('input[value="Male"]').parent('label').should('exist');
    });

    it('Utilizando el metodo sibling', () => {
        cy.visit('');
        cy.get('input#user').siblings('label').should('exist');
    });

    it('Utilizando el metodo contains', () => {
        cy.visit('');
        cy.get('button#submitForm').contains('Register');
    });

    it('Utilizando el metodo contains', () => {
        cy.visit('');
        cy.contains('White Pants').siblings('p#productPrice')
    });

    it.only('Encontrando elemento web de forma parcial con *', () => {
        cy.visit('');
        cy.get("[class*='password']").should('exist'); //que contenga
    })

    it.only('Encontrando elemento web de forma parcial con ^', () => {
        cy.visit('');
        cy.get("[id^='use']").should('exist'); //que inicie
    })

    it.only('Encontrando elemento web de forma parcial con $', () => {
        cy.visit('');
        cy.get("[id$='ser']").should('exist'); //que finalice
    })

    it('Deberiamos encontrar el usuario en el header', () =>{
        const usuario = 'fabrizio';
        cy.get(`[id^='user_${usuario}_']`).should('exist');
    })
});