/// <reference types="cypress"/> 
describe('Juan Gabot desafio 4', () => {

    it('Casos de prueba', () => {
        const username = "Juanma1";
        const password = "123456!";
        const gender = "Male";
        const day = "13";
        const month = "December";
        const year = "1995";
                        
        cy.request({
            url: 'https://pushing-it.onrender.com/api/register',
            method: 'POST',
            body: {
                username: username,
                password: password,
                gender: gender,
                day: day,
                month: month,
                year: year
            },
        }).then(response => {
            expect(response.status).equal(200);
            expect(response.body.newUser.username).is.eql(username.toLowerCase());
            expect(response.body.newUser.gender).is.eql(gender);
            expect(response.body.newUser.day).is.eql(day);
            expect(response.body.newUser.month).is.eql(month);
            expect(response.body.newUser.year).is.eql(year);
            cy.request({
                url: 'https://pushing-it.onrender.com/api/login',
                method: 'POST',
                body: {
                    username: username,
                    password: password
                },
            }).then(response => {
                expect(response.status).equal(200);
                cy.request({
                    url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
                    method: 'DELETE',
                }).then(response => {
                    expect(response.status).equal(200);
                });
            });
        }); 
    });
});
