$("#login-btn").on("click", function () {
    $(this)
      .addClass("active-button")
      .siblings()
      .removeClass("active-button");
    $(".signup-form").slideUp(500);
    $(".login-form").slideDown(500);
  });

  $("#signup-btn").on("click", function () {
    $(this)
      .addClass("active-button")
      .siblings()
      .removeClass("active-button");
    $(".login-form").slideUp(500);
    $(".signup-form").slideDown(500);
  });

$('#login-password').keypress(function(e){
    var key = e.which;
    if(key === 13){
     $('#login-submit-btn').click();
        return false;
    }
});

$('#confirm-password').keypress(function(e){
   var key = e.which;
    if(key === 13){
     $('#signup-submit-btn').click();
        return false;
    }
});
