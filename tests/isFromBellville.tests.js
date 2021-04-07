describe('isFromBellville function' , function(){
    it('should return CY if the regNumber isFromBellville', function(){
        assert.equal(true, isFromBellville("CY 87 OP"))
    })

    it('should return false if the regNumber not from Bellville', function(){
        assert.equal(false, isFromBellville("CA 87 OP"))
    })
    
})