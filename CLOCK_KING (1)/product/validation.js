function validate() {
      
    if( document.myForm.Name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
     }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.pass.value == "" || isNaN( document.myForm.pass.value ) ||
       document.myForm.pass.value.length != 5 ) {
       
       alert( "Please provide a password in the format #####." );
       document.myForm.pass.focus() ;
       return false;
    }
    return( true );
 }
 function register(){  
    if(validate()==True){
    alert("Đăng kí thành công");  }
    else {
        alert("Hãy kiểm tra lại form")
    }
    }
  function Login(){  
    if(validate()==true){
    alert("Đăng nhập thành công");  }
    else {
        alert("Hãy kiểm tra lại form")
    }
  }  
 