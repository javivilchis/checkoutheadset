$(document).ready( function(){

     $('#checkout').validate({
          submitHandler: Submit,
          rules: {
               checkoutDate: {
                    required: true
               },
               headsetId: {
                    required: true
               },
               fullName: {
                    required: true
               },
               phoneNumber: {
                    required: true
               },
               email: {
                    required: true
               }
          },
          messages: {
               checkoutDate: {
                    required: "Hey you enter a valid Date is necessary!"
               },
               headsetId: {
                    required: "Headset id is required"
               },
               fullName: {
                    required: "Your full name is required"
               },
               phoneNumber: {
                    required: "enter your phone number, please!"
               },
               email: {
                    required: "email is required"
               }
          }
     });

     function Submit(){   
          alert("HEY it works!");
     }

     function reset(){
          
     }
       


});
