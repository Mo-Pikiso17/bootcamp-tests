function countAllFromTown(regNo, location){
  var regNumbs = regNo.split(",");
  var countRegNo = [];
  
  for (var i=0;i<regNumbs.length;i++){
    var reg = regNumbs[i].trim();
    
    if (reg.startsWith(location)){
      countRegNo.push(reg);
      console.log(countRegNo.length);
    
    
    }
  
  }
  return countRegNo.length;
  //console.log(countRegNo.length);


}