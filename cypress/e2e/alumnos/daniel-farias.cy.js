describe('Desafio 4', () => {
  const username = "Daniel Farias";
  const password = "123456!";
  const gender = "Male";
  const day = "21";
  const month = "7";
  const year = "2000";

  it('Deveria poder registrarme, ingresar al sistema y eleminar mi usuario por medio de la API', () => {
    cy.request({
      url: 'https://pushing-it.onrender.com/api/register',
      method: 'POST',
      body: {
        username: username,
        password: password,
        gender: gender,
        day: day,
        month: month,
        year: year,
      },
    }).then(result => {
      expect(result.status).is.eql(200);
      expect(result.body.newUser.username).is.eql(username.toLowerCase());
      expect(result.body.newUser.gender).is.eql(gender);
      expect(result.body.newUser.day).is.eql(day);
      expect(result.body.newUser.month).is.eql(month);
      expect(result.body.newUser.year).is.eql(year);

      cy.request({
        url: 'https://pushing-it.onrender.com/api/login',
        method: 'POST',
        body: {
          username: result.body.newUser.username,
          password: password,
        },
      }).then(result2 => {
        expect(result2.status).is.eql(200);

        cy.request({
          url: `https://pushing-it.onrender.com/api/deleteuser/${result2.body.user.username}`,
          method: 'DELETE',
        }).then(result3 => {
          expect(result3.status).is.eql(200);
        })
      })
    })
  })
});