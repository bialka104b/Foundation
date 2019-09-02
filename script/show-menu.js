//AUTHOR: Create by https://github.com/bialka104b bialka104b@interia.pl
$(document).ready(function() {
  $(window).bind("scroll", function() {
    var num = 120; //number of pixels before modifying styles
    if ($(window).scrollTop() > num) {
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
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
