describe('greet function' , function(){
    it('should return hello neighbourName', function(){
        assert.equal("Hello, Tess", greet ("Tess"));

        // assert.equal("Hello, Tess", greet ());
        // assert.deepEqual([2,2],[2,2]);
    });

    it('if you pass anything that is not a string should not accept it.', function(){
        assert.equal("please pass a string!", greet (7));
        // assert.deepEqual([2,2],[2,2]);
    });

});