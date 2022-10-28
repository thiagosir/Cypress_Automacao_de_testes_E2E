describe (' Buscar fotos ', () => {

    it('buscar fotos de flavio', () => {
        cy.request({
            method: 'GET',
            url: 'http://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            
        })
    })
})