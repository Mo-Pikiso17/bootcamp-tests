describe('isWeekday function' , function(){
    it('should return a weekday' , function(){
        assert.equal(true, isWeekday('Monday'))
    })

    it('should return false if not a weekday' , function (){
        assert.equal(false, isWeekday('Saturday'))
    })

})