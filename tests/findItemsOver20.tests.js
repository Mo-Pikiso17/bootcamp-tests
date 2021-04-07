describe('findItemsOver20 function' , function(){
    it('should return items that have the quantity of over 20' , function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}], 
            findItemsOver20 ([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}]))

    })

    it('should return items that have the quantity of over 25' , function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 30}
    ], 
        
        findItemsOver20 ([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 30}]))

    })

})