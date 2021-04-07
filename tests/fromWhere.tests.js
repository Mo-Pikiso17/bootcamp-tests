describe('fromWhere function' , function(){
    it('should return CY if the carRegNo from Bellville' , function() {
        assert.equal('Bellville', fromWhere('CY'))

    })

    it('should return CJ if the carRegNo from Paarl' , function() {
        assert.equal('Paarl', fromWhere('CJ'))

    })

    it('should return CA if the carRegNo from Cape Town' , function() {
        assert.equal('Cape Town', fromWhere('CA'))

    })

    it('should return false if the carRegNo does not start with CJ, CA, or CY' , function() {
        assert.equal('Some other place!', fromWhere('CL'))

    })

})