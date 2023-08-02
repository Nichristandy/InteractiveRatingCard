
var rate = $(".rate")
var submit = $(".submit")
var clicked = false



rate.on("click",function(){
    rate.removeClass("active")
    var value = $(this).text();
    $(this).addClass("active"); 
    $(".rate-score").text("You Selected " + value + " out of 5") 
    clicked = true;
});

submit.on("click", function(){
    if(clicked == false){
        alert("You should choose your rating")
    }else if(clicked == true){
        $("#rate").addClass("hidden")
        $('#thankyou').removeClass("hidden")
    }



})

