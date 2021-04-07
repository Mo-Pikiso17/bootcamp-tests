function fromWhere(carRegNo){
  
    if (carRegNo.startsWith("CY")){
      return "Bellville";
    }
    else if (carRegNo.startsWith("CJ")){
      return "Paarl";
    }
    else if(carRegNo.startsWith("CA")){
      return "Cape Town";
    }
    else {
      return "Some other place!";
    }
        
  }