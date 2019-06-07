$(document).ready(function(){

    $("#form").submit(function() {

        var firstName= $("input#firstName").val();
        var lastName = $("input#lastName").val();
        var email = $("input#email").val();
        // var addressInput = $("input#address").val();
        // var cityInput = $("input#city").val();
        // // var stateInput = $("input#state").val();
        // var zipCodeInput = $("input#zipCode").val();
        // // var cityInput = $("input#city").val();
        var program = "coool"

        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Email: " + email);
        console.log("Email: " + email);
    
        $(".firstName").text(firstName);
        $(".lastName").text(lastName);
        $(".email").text(email);
        // $(".address").text(addressInput);
        // $(".city").text(cityInput);
        // // $(".state").text(stateInput);
        // $(".zipCode").text(zipCodeInput);
        // // $(".noun").text(cityInput);

        // $('#SelectBoxId option:selected').text();
    
        $("#output").show();
    
        event.preventDefault();
    });

    // Below is the code for the select element for State
    $("#state").on("change",function(){
        //Getting Value
        var stateInput = $("#state :selected").val();
        //Setting Value
        $(".state").text(stateInput);
    }); 

});