/// <reference types="cypress" />

describe('API testing', () => {

    it('Deberia realizar una peticion http get sencilla', () => {
        cy.request('http://localhost:3000/posts').then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 2')
        });
    });

    it('Deberia realizar una peticion http get sencilla colocando un objeto', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get'
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 2')
        });
    });

    it('Peticion get con una query simple', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get',
            qs: {
                id: 4
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 4')
        });
    });

    it('Peticion get con una query ordernando de forma descendente', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get',
            qs: {
                _sort: 'id',
                _order: 'desc'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 17')
        });
    });

    it('Peticion get con una query con slices', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get',
            qs: {
                _start: '5',
                _end: '10'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 6')
        });
    });

    it('Peticion get con una query con rangos', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get',
            qs: {
                id_gte: '5',
                id_lte: '10'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body[0].title).equal('titulo 5')
        });
    });

    it('Peticion get con una query excluyendo valores', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'Get',
            qs: {
                id_ne: ['1', '8'],
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(200)
            expect(respuesta.body.length).equal(15)
        });
    });

    it('Peticion Post', () => {
        const id = Math.floor(Math.random() * 1000);
        const titulo = `Titulo ${id}`;
        const author = "Juanita Gomez";
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'POST',
            body: {
                id: id,
                titulo: titulo,
                author: author
            },
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).equal(201);
            expect(respuesta.body.titulo).equal(titulo)
        });
    });

    it('Deberia realizar una peticion http con destructuring', () => {
        cy.request('http://localhost:3000/posts').then(({ body, status }) => {
            expect(status).equal(200);
            expect(body[0].title).equal('titulo 2');
        });
    });

    it('Deberia realizar una peticion PUT', () => {
        const titulo = `Titulo 1`;
        const author = "Juanita Gomez";
        cy.request({
            url: 'http://localhost:3000/posts/1',
            method: 'PUT',
            body: {
                id: 1,
                titulo: titulo,
                author: author
            },
        }).then(({ body, status }) => {
            console.log(body)
            expect(status).equal(200);
            expect(body.titulo).equal(titulo);

        });
    });

    it('Deberia realizar una peticion DELETE', () => {
        cy.request({
            url: 'http://localhost:3000/posts/11',
            method: 'DELETE',
        }).then((respuesta) => {
            expect(respuesta.status).equal(200);
        });
    });

    it('Deberia encadenar peticiones Post - Put - Delete', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts/",
            body: {
                id: Math.floor(Math.random() * 10000),
                titulo: `Titulo x`,
                author: "Fabrizio Ramirez"
            }
        }).then(respuesta => {
            expect(respuesta.status).equal(201);
            cy.request({
                url: `http://localhost:3000/posts/${respuesta.body.id}`,
                method: 'PUT',
                body: {
                    id: respuesta.body.id,
                    titulo: `Titulo s`,
                    author: "Fabrizio Ramirez"
                }
            }).then(respuesta => {
                expect(respuesta.body.titulo).equal('Titulo s')
                expect(respuesta.status).equal(200);
                const id = respuesta.body.id;
                cy.request({
                    url: `http://localhost:3000/posts/${respuesta.body.id}`,
                    method: 'DELETE',
                }).then(respuesta => {
                    expect(respuesta.status).equal(200);
                    cy.request({
                        url: `http://localhost:3000/posts/`,
                        method: 'GET',
                        qs:{
                            id: id,
                        }
                    }).then(respuesta =>{
                        expect(respuesta.body.length).equal(0)
                    })
                })
            })
        })
    })
});