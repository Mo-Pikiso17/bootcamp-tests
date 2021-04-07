describe('transportFee' , function(){
    it('should return the right price for the morning shift.' , function(){
        assert.deepEqual('R20', transportFee ('morning'));
    })
    it('should return the right price for the afternoon shift.' , function(){
        assert.deepEqual('R10', transportFee ('afternoon'));
    })

    it('should return the right price when there is no shift.' , function(){
        assert.deepEqual('free', transportFee ('else'));
    })
})