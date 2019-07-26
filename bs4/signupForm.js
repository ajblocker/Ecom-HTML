$().ready(function() {
 
    $("signupForm").validate({
       rules: {
           firstName: "required",
           lastName: "required"
       },
       email: {
           required: true,
           email: true
       },
       password: {
           required: true,
           minlength: 8
       },
       confirm_password: {
            required: true,
             minlength: 8,
            equalTo: #password
    },
    //vaild email address
         email: {
            required: true,
            email: true
         },
       messages: {
           firstName: "Please enter your first name",
           lastName: "Please enter your last name"
       },
       password: {
           required: "Please provide a password",
           minlength: "your password must be at least 8 characters long"
       },
       confirm_password: {
        required: "Please provide a password",
        minlength: "your password must be at least 8 characters long",
        equalTo: "Please enter the same password as above"
       }
});

$("#signupForm").focus(function() {
    var firstName = $("#firstName").val();
    var lastName = $("lastName").val();
    if (firstName && lastName && !this.value) {
        this.value = firstName + "." + lastName;
    }
});