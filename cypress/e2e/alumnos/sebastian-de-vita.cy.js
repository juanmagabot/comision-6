/// <reference types="cypress" />

describe('Sebastian De Vita API Testing', () => {

    it('Deberia registrar un usuario, ingresar al sistema y eliminar el usuario ', () => {
        const username = "sebita"
        const password = "123456!"
        const gender = "Masculino"
        const day = "5"
        const month = "December"
        const year = "1996"

        cy.request({
            url: 'https://pushing-it.onrender.com/api/register',
            method: 'POST',
            body: {
                username : username,
                password : password,
                gender : gender,
                day : day,
                month : month,
                year : year
            }
        }).then(response => {
            expect(response.status).equal(200)
            expect(response.body.newUser.username).equal(username)

            cy.request({
                url: 'https://pushing-it.onrender.com/api/login',
                method: 'POST',
                body: {
                    username: username,
                    password: password
                }
            }).then(response => {
                expect(response.status).equal(200)
                expect(response.body.user.username).equal(username)

                cy.request({
                    url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
                    method: 'DELETE'
                }).then(response => {
                    expect(response.status).equal(200)
                    expect(response.body.user.username).equal(username)
                })
            })
        })
        })
    })
