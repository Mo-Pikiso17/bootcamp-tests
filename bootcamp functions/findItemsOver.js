function findItemsOver(list, threshold){
    var itemings = [];
     for( var i=0; i<list.length; i++)
     {
       var items = list[i];
      if(items.qty > threshold) {
        itemings.push(items);
         }
     }
     
     console.log(itemings);
       return itemings;
   }
   