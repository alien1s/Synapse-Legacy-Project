$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  $(document).ready(function(){
    $(".click").click(function(){
      $("#nav").fadeIn();
      $(".click").fadeOut();
    });
    });
    $(document).ready(function(){
      $("#nav").click(function(){
        $(".click").fadeIn();
        $("#nav").fadeOut();
      });
      });
      $(document).ready(function(){
        $(".ios").click(function(){
          $(".popups").fadeIn();
          $(".ios").fadeOut();
        });
        });
        $(document).ready(function(){
          $(".popups").click(function(){
            $(".ios").fadeIn();
            $(".popups").fadeOut();
          });
          });
          