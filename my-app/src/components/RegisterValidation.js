 function Validation(values){

     //alert("")
     let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    //const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
     if(values.firstName === "") 
     {

         error.firstName = "First Name Should not be empty"

    }
    else {
    error.firstName = ""  
     }
     if(values.lastName === "") 
     {

        error.lastName = "Last Name Should not be empty"

     }
     else {
     error.lastName = ""  
     }
     if(values.email === "") 
    {

    error.email = "Email Should not be empty"

    }    
    else if(!email_pattern.test(values.email)){
       error.email = "Email Not Valid"  
      }
     else {
    error.email = ""  
      }

if(values.password === "") 
 {
      error.password = "Password Should not be empty"

 }
//  else if(!password_pattern.test(values.password)){
//      error.password = "Password Not Valid"  
//     }
    else {
     error.password = ""  
    }
  
     return error;

 }

 export default Validation;
 