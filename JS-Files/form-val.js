function validate() {
      
    if( document.form1.fname.value == "") {
       alert( "Please provide your first name!");
       document.form1.fname.focus() ;
       return false;
    }

    if( document.form1.lname.value == "") {
       alert( "Please provide your last name!");
       document.form1.lname.focus() ;
       return false;
    }

    if( document.form1.email.value == "") {
       alert( "Please provide your Email!");
       document.myForm.email.focus();
       return false;
    }

    if( document.form1.role.value == "-1") {
       alert( "Please select an option!");
       return false;
    }
    return( true );
 }
 console.log([form1].value)