
// Function for getting an average score from the select inputs
var score = function(income, math, operatingSys, beverage) {
    return (income + math + operatingSys + beverage) / 4;
  };

$(document).ready(function(){
    
    $("#form").submit(function(event) {

        var firstName= $("input#firstName").val();
        var lastName = $("input#lastName").val();
        var email = $("input#email").val();
        var income = parseInt($("select#income").val());
        var math = parseInt($("select#math").val());
        var operatingSys = parseInt($("select#operatingSys").val());
        var beverage = parseInt($("select#beverage").val());
        var term = $("input:radio[name=term]:checked").val();

        // call the score function with our form inputs
        var result = score(income, math, operatingSys,beverage);

        // leverage the resulting score to determine the program
        var program;
        if (result <= 2) {
            (program = "Jr. Web Development");
        } else if (result > 2 && result <= 3.25) {
            (program = "Advanced Front-end Development");
        } else {
            (program = "Machine Learning and AI");
        }

        // dead-weight for debugging fun
        // console.log("First Name: " + firstName);
        // console.log("Last Name: " + lastName);
        // console.log("Email: " + email);
        // console.log("Income: " + income);
        // console.log("Math Level: " + math);
        // console.log("OS: " + operatingSys);
        // console.log("Beverage: " + beverage);
        // console.log("Term: " + term);
        // console.log("Score: " + score);
        // console.log("Result: " + result);
    
        $(".firstName").text(firstName);
        $(".lastName").text(lastName);
        $(".email").text(email);
        $(".term").text(term);
        $(".program").text(program)
    
        $(".body").hide();
        $("#output").show();

        event.preventDefault();
        
    });

});