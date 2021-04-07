describe('countAllPaarl function' , function(){
    it('should return the number registration numbers in a string for Paarl', function(){
        assert.deepEqual(3 , countAllPaarl("CJ 345 123,  CJ 2345, CL 123-546,  CK 345, CJ 123"));

    });

    it('should return two registration numbers in a string for Paarl', function(){
        assert.deepEqual(2 , countAllPaarl("CJ 2345, CL 123-546,  CK 345, CJ 123"));
 
    });


})