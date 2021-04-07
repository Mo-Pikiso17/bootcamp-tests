describe('countRegNumber function' , function(){
    it('should return the number of regNo in a string of three', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
        it('should return the number of regNo in a string of two', function(){
            assert.equal(2, countRegNumber ('CA 42665, AA 12 RT GP'));   
    });
})