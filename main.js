$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    var opt = "yes";
    var values = [$(".name"), $(".email"), $(".number"), $(".country")];
    //var email = values[1].val();
    //  if(email.includes('@') && email.includes('.com')
    for (let i = 0; i < values.length; i++) {
      if (values[i].val() == "") {
        opt = "no";
        values[i].css("border-color", "orangered");
      } else {
        values[i].css("border-color", "white");
      }
      values[i].focus(function () {
        values[i].css("border-color", "cyan");
      });
      values[i].blur(function () {
        values[i].css("border-color", "white");
      });
    }

    if ($("#checkbox").is(":checked") && opt == "yes") {
      $("#submit").css({ "border-bottom": "5px solid lightgreen" });
    } else {
      $("#submit").css({ "border-bottom": "0px solid white" });
    }
    $("#submit").css("transition", "0.3s");
  });
});
