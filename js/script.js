$(function () {
  // ハンバーガーメニュー
  var imgHeight = $(".fv__img").outerHeight();
  var bgHeight = $(".fv").outerHeight();

  $(".burger-btn").click(function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      $(".burger-btn__bar").toggleClass("cross");
      $(".burger-menu").toggleClass("open");
      $(".burger-bg").fadeToggle(300);
      $("body").toggleClass("noscroll");
    } else {
      $(".burger-btn__bar").toggleClass("black");
      $(".burger-btn__menu").toggleClass("black");
      $(".burger-btn__bar").toggleClass("cross");
      $(".burger-menu").toggleClass("open");
      $(".burger-bg").fadeToggle(300);
      $("body").toggleClass("noscroll");
    }
  });
  // 下スクロールで黒に
  $(window).scroll(function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      $(".header__logo").removeClass("black");
    } else {
      $(".header__logo").addClass("black");
    }

    if ($(window).scrollTop() < bgHeight - 50) {
      $(".burger-btn__bar").removeClass("black");
    } else {
      $(".burger-btn__bar").addClass("black");
    }

    if ($(window).scrollTop() < bgHeight - 50) {
      $(".burger-btn__menu").removeClass("black");
    } else {
      $(".burger-btn__menu").addClass("black");
    }
  });
});
