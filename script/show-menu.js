//AUTHOR: Create by https://github.com/bialka104b bialka104b@interia.pl
$(document).ready(function() {
  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > 120) {
      $(".navbar").addClass("fixed");
      $("#scroll").css({ display: "block" });
    } else {
      $(".navbar").removeClass("fixed");
      $("#scroll").css({ display: "none" });
    }
  });
  $(".icon-menu").on("click", function(e) {
    e.preventDefault();
    $(".navbar-nav").slideToggle(500);
    window.onresize = function() {
      if (window.innerWidth > 767) {
        $(".navbar-nav").css({ display: "block" }); //the script reverses the operation of slideToogle if we extend the browser window
      }
    };
  });
  $("#aboutAs").on("click", function(e) {
    e.preventDefault();
    $("#list-menu1").slideToggle(500); // list AboutUS
  });
});
