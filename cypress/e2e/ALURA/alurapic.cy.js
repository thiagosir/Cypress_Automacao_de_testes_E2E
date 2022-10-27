/// <reference types="cypress" />


describe('Login e registro de usuarios alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('Verifica mensagens de validacao', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })

    it('Verifica mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('thiago')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

    })

    it('Verifica mensagem senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

    })


    it.only('Realizar cadastro de usuario valido', () => {
       cy.Cadastro('thiago@qa.com', 'thiago bento', 'thiago', '12345678');
    //    cy.contains('a', 'Please, login!').should('be.visible');
    })

    it.only('Fazer login usuario valido', () => {
       cy.login('thiago', '12345678');
       cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('Fazer login de usuario invalido', () => {
        cy.login('thiagos', '12345');
        cy.on('window:alert', (res) => {
            expect(res).to.equals('Invalid user name or password');
        })
    })

})