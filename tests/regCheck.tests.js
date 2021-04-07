describe('regCheck function' , function(){
    it('should return regPlt that ends with regLoc', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'))
    })

    it('should return false if regPlt does not end with registration location', function(){
        assert.equal(false, regCheck('DV 23 NB CA'))
    })

})