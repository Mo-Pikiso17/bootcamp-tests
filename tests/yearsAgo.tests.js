describe('yearsAgo function' , function(){
    it('should return the number of years from 1996 until this year' , function(){
        assert.equal(25, yearsAgo (1996));

    });

    it('should return the number of years from 1998 until this year' , function(){
        assert.equal(23, yearsAgo (1998));

    });


})