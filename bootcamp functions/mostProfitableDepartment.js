function mostProfitableDepartment(departments){
    const departmentsMap = {};
    
    
    
    for (var i = 0; i<departments.length; i++) {
      const currentDepartment = departments[i];
      
      
      departmentsMap[currentDepartment.department] = 0;
  
    }
    //console.log(departmentsMap);
    
    //SALES per department
    for (var i = 0; i<departments.length; i++) {
      const currentDepartment = departments[i];
      
      var currentDepartmentTotal = departmentsMap[currentDepartment.department];
      currentDepartmentTotal += currentDepartment.sales;
      
      departmentsMap[currentDepartment.department] = currentDepartmentTotal;
      }
    //console.log(departmentsMap);
    
    //Finding the most profitable department
    
    var total = 0;
    var dept = "";
    
    for (const departmentDepartment in departmentsMap){
      //console.log(departmentDepartment);
      //console.log(departmentsMap[departmentDepartment]);
    const departmentDepartmentSale = departmentsMap[departmentDepartment];
      if(departmentDepartmentSale > total){
        total = departmentDepartmentSale;
        dept = departmentDepartment;
          
          }
  
    }
    //console.log(total);
    //console.log(dept);
    return dept;
    //console.log(mostProfitableDepartment('outdoor'));
    
  }