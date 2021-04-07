function totalPhoneBill(callsAndSms){
    console.log(callsAndSms);
    var stringList = callsAndSms.split(", ");
    var totalBill = 0;// increment from zero
    
    for (var i=0;i<stringList.length;i++){
      
      if (stringList[i] === "call"){
        totalBill += 2.75; //increment call bill
        
      }
      else if (stringList[i] === "sms"){
        totalBill += 0.65;//increment sms bill
        
    }
  
    }
    console.log("R" + totalBill.toFixed(2));
  return "R" + totalBill.toFixed(2);// toFixed allows one to decide on the number of decimal places after the comma. 
  }