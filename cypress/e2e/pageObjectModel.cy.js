/// <reference types="cypress" />

import { RegisterPage } from '../support/pages/registerPage'
import { LoginPage } from '../support/pages/loginPage';
const { NavbarPage } = require('../support/pages/navbarPage');

describe('Page object Model', () => {
    let loginData;
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();
    const navBarPage = new NavbarPage();

    before('Before', () => {
        cy.fixture("primerFixture").then(data => {
            loginData = data
        });
    });

    beforeEach("precondiciones", () => {
        cy.visit('');
        registerPage.dblClickIniciaSesion();
        loginPage.login(loginData.test1.loginData.usuario, loginData.test1.loginData.contraseña);
    })

    it('Deberia validar que el usuario ingreso al sistema', () => {
        navBarPage.retornarUsuario(loginData.test1.loginData.usuario).should('include.text', loginData.test1.loginData.usuario);
    });
});