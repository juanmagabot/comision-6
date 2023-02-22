describe('Xpath', () => {

    it('xpath absoluto encontrando el boton "Register"', () => {
        cy.visit('');
        cy.xpath('html/body/div/div/div/div/form/button');
    });

    it('xpath relativo encontrando el boton "Register"', () => {
        cy.visit('');
        cy.xpath("//button[@id='submitForm']");
    });

    it('xpath relativo utilizando metodo contains', () => {
        cy.visit('');
        cy.xpath("//input[contains(@id,'us')]");
    });

    it('xpath relativo utilizando metodo starts-with', () => {
        cy.visit('');
        cy.xpath("//input[starts-with(@id,'us')]");
    });

    it('xpath relativo utilizando metodo text', () => {
        cy.visit('');
        cy.xpath("//button[text()='Register']");
    });

    it('xpath relativo utilizando metodo contains y text', () => {
        cy.visit('');
        cy.xpath("//button[contains(text(),'gist')]");
    });

    it('xpath relativo utilizando metodo starts-with y text', () => {
        cy.visit('');
        cy.xpath("//button[starts-with(text(),'Regist')]");
    });

    it('xpath relativo con operadores logicos "and"', () => {
        cy.visit('');
        cy.xpath("//input[@id='pass' and @name='pass']"); // ambas condiciones deben ser verdaderos
    });

    it('xpath relativo con operadores logicos "or"', () => {
        cy.visit('');
        cy.xpath("//input[@id='passt' or @name='pass']"); // una condicion debe ser verdadera
    });

    it('xpath relativo con operadores logicos "not"', () => {
        cy.visit('');
        cy.xpath("//input[@id='pass' and not(@name='passt')]"); // una condicion debe ser verdadera y la otra negativa
    });

    it('xpath relativo utulizando descendant', () => {
        cy.visit('');
        cy.xpath("//fieldset//descendant::input[@value='Male']");
    });

    it('xpath relativo utulizando ancestor', () => {
        cy.visit('');
        cy.xpath("//input[@value='Male']//ancestor::fieldset");
    });

    it('xpath relativo utulizando child', () => {
        cy.visit('');
        cy.xpath("//label//child::input[@value='Male']");
    });

    it('xpath relativo utulizando parent', () => {
        cy.visit('');
        cy.xpath("//input[@value='Male']//parent::label");
    });

    it('xpath relativo utulizando following-sibling', () => {
        cy.visit('');
        cy.xpath("//label//following-sibling::input[@id='user']");
    });

    it('xpath relativo utulizando preceding-sibling', () => {
        cy.visit('');
        cy.xpath("//input[@id='user']//preceding-sibling::label");
    });
});