function findItemsOver20(listItems){
    var iteming = [];
     for( var i=0; i<listItems.length; i++)
     {
       var items = listItems[i];
      if(items.qty > 20) {
        iteming.push(items);
         }
     }
     
     console.log(iteming);
       return iteming;
   }