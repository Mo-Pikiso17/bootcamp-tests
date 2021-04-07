describe('countAllFromTown function' , function(){
    it('should return the registration numbers in the string that town (CL).' , function(){
        assert.deepEqual(3, countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CL'));
    })

    it('should return the registration numbers in the string that town (CY)' , function(){
        assert.deepEqual(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CY'));
    })

    it('should return the registration numbers in the string that town (CJ)' , function(){
        assert.deepEqual(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'));
    })
})