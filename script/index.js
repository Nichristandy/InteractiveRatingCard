
var rate = $(".rate")
var submit = $(".submit")

submit.on("click", function(){
    $("#rate").addClass("hidden")
    $('#thankyou').removeClass("hidden")
})

rate.on("click",function(){
    rate.removeClass("active")
    var value = $(this).text();
    $(this).addClass("active"); 
    $(".rate-score").text("You Selected " + value + " out of 5") 
});

