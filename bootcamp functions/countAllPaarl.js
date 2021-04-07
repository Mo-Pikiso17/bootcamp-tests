function countAllPaarl(regNo){
    var regs = regNo.split(",");
    var paarlRegNo = [];
    
    
    for (var i=0;i<regs.length;i++){
      console.log(regs)
      var reg = regs[i].trim();
      
     if(reg.startsWith("CJ")){
       paarlRegNo.push(reg);
        //console.log(i + paarlRegNo[i]);
      
      }
      //console.log(i + paarlRegNo[i]);
     
    }
    return paarlRegNo.length;
  
  }