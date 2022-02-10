$(function () {
  mobileMode();
  //ui_nav_main();
  //ui_nav_sub();
  //ui_subVisual();
});

function mobileMode() {
  var $window = $(window),
    $window_width = $window.width();

  if ($window_width <= 1050) {
    $("#outwrapper").removeClass("mode-web").addClass("mode-mobile");
  } else {
    $("#outwrapper").removeClass("mode-mobile").addClass("mode-web");
  }
}

function ui_nav_main() {
  var nav_menu = $(".container_index.mode-web .header nav"),
    nav_menu_2depth = nav_menu.find("ul li ul");
  nav_menu
    .mouseenter(function () {
      $(".container_index.mode-web .header").addClass("fixed");
      $(".container_index.mode-web .header .bg").stop().animate({
          top: 0,
          opacity: 1,
        },
        300
      );
      nav_menu_2depth.stop().delay(300).animate({
          height: "250px",
          opacity: 1,
        },
        1200,
        "easeOutQuint"
      );
    })

    .mouseleave(function () {
      $(".container_index.mode-web .header").removeClass("fixed");
      $(".container_index.mode-web .header .bg").stop().delay(300).animate({
          top: "-300px",
          opacity: 0,
        },
        300
      );
      nav_menu_2depth.stop().delay(0).animate({
          height: 0,
          opacity: 0,
        },
        300
      );
    });

}