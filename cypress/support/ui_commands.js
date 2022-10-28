Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})


Cypress.Commands.add('Cadastro', (email, fullName, userName, password) => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type(usuario.email);
    cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
    cy.get('input[formcontrolname="userName"]').type(usuario.userName);
    cy.get('input[formcontrolname="password"]').type(usuario.password);
    cy.contains('button', 'Register').click();
    
})
