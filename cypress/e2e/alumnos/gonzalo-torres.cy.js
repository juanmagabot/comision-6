/// <reference types="cypress" />

describe('Desafío 4 - Pushing IT - Torres Gonzalo', () => {

    it('TC-1', () => {
        const username = "gonzalo";
        const password = "123456!";
        const gender = "Male";
        const day = "3";
        const month = "April";
        const year = "1981";
                        
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
