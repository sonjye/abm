$(document).ready(function () {
  $(".btn-user-information").click(function () {
    $(this).toggleClass("active");
  });
  $(".header-menu").click(function () {
    $(".header-menu__gnb").toggleClass("active");
  });

  // 미리보기 스크롤
  /*$(".preview-wrap__content-arrow--right").click(function () {
    $(".preview-wrap__contents-tab").animate({ left: "-50px" });
  });
  $(".preview-wrap__content-arrow--left").click(function () {
    $(".preview-wrap__contents-tab").animate({ left: "0px" });
  });*/

  /*$(".preview-wrap__contents-tab li").click(function () {
    $(".preview-wrap__contents-tab li").removeClass("active");
    $(this).addClass("active");
  });

  $(".preview-wrap__contents-tab li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".preview-wrap__contents-tab li").removeClass("current");
    $(".preview-wrap__contents-tabpanel").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });*/

  // 미리보기 팝업
  $(".preview-popup__btn").click(function () {
    $(".layer-popup__preview").toggle();
    $(".layer-popup__preview-inner").toggle();
  });
  $(".preview-popup__btn--closed").click(function () {
    $(".layer-popup__preview").hide();
    $(".layer-popup__preview-inner").hide();
  });

  // 변수 추가 toggle
  $(".variable-btns").click(function () {
    $(this).next().toggleClass("active");
  });
});