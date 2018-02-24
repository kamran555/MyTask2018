


$(document).ready(function(){
 

	
  
  $(".but").on('click',function(){


    
    	
       // Check  the all input 
       var LastName = document.getElementById("lname");
       var FirstName = document.getElementById("fname");
       var PostCode = document.getElementById("postalCode");
       var ExpDate = document.getElementById("expirationDate");

    if (!FirstName.checkValidity()) {
       alert("Adinizi duzgun daxil edin");

    } 

     if (!LastName.checkValidity()) {
       alert("Soyadinizi duzgun daxil edin");

    } 

   

    if (!PostCode.checkValidity()) {
       alert(" Postal Kodu duzgun daxil edin ");
       
    } 
    if (!ExpDate.checkValidity()) {
       alert(" Kart tarixini duzgun daxil edin  ");
       
    } 


    if(FirstName.checkValidity()&&LastName.checkValidity()&&PostCode.checkValidity()&&ExpDate.checkValidity()){
    	
    	alert(" Tebrikler satin aldiniz  ");
    }
    

  });

// For Credit Card Pattern 

 $('.creditCardText').keyup(function() {
  var foo = $(this).val().split("-").join(""); 
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $(this).val(foo);
});
   

   // For Expiration Date Pattern 


    $('.expdate').keyup(function() {
  var foo = $(this).val().split("/").join(""); 
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,2}', 'g')).join("/");
  }
  $(this).val(foo);
});
   
  
  

});
