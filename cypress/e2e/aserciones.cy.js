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
    })

    it('Primera asercion utilizando BDD (should)', () => {
        cy.get('#title').should('have.text', 'Waits');
    })

    it('Primera asercion utilizando BDD (expect)', () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).is.equal('Waits');
        });
    })

    it('Primera asercion utilizando TDD (assert)', () => {
        cy.get('#title').invoke('text').then(texto => {
            assert.equal(texto,'Wait')
        });
    });

    it.skip('Primera asercion verificando la cantidad de elementos cuyo id es "title"', () => {
        cy.get('#title').should('have.length', 1);
    })

    it('Primera asercion verificando la cantidad de caracteres', () => {
        cy.get('#title').invoke('text').should('have.length', 5);
    })

    it('Primera asercion utilizando and con should', () => {
        cy.get('#title').should('have.length', 1).and('have.text', 'Waits');
    })

    
    it('Primera asercion veficando css con should', () => {
        cy.get('#title').should('have.css','color', 'rgb(51, 255, 255)')
    })

    it('Primera asercion veficando css con expect', () => {
        cy.get('#title').invoke('css', 'color').then(color => {
            expect(color).is.equal('rgb(51, 255, 255)')
        })
    })
});