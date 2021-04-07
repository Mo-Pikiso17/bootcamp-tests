describe('findItemsOver function' , function(){
    it('should return items that are over the threshold' , function(){
        assert.deepEqual([{name:"apples",qty:40},{name:"bananas",qty:23},{name:"kiwi",qty:37} ],
        
        findItemsOver([{name:"apples",qty:40},{name:"bananas",qty:23},{name:"kiwi",qty:37},{name:"pears",qty:10}], 20))

    })

    it('should return items that are over the threshold' , function(){
        assert.deepEqual([{name:"apples",qty:40},{name:"pears",qty:37}],
        
        findItemsOver([{name:"kiwi",qty:20},{name:"bananas",qty:23},{name:"apples",qty:40},{name:"pears",qty:37}], 25))

    })

})