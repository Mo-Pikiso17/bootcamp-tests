function greet(neighbourName){
  if(typeof(neighbourName)!="string"){
    return "please pass a string!"
  }
    console.log("Hello, " + neighbourName);
    return "Hello, " + neighbourName;
  
  }