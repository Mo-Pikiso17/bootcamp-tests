describe('totalPhoneBill' , function(){
    it('should return the phone bill for two calls and one sms.' , function(){
        assert.deepEqual('R' + 6.15, totalPhoneBill('call, call, sms'));

    })

    it('should return the phone bill for three smses.' , function(){
        assert.deepEqual('R' + 1.95 , totalPhoneBill('sms, sms, sms'));

    })

    it('should return the phone bill for a call.' , function(){
        assert.deepEqual('R' + 2.75 , totalPhoneBill('call'));

    })

    
})