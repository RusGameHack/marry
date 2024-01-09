document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});
$(document).ready(function () {
  $(window).scroll(function () {
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var time = 100;
      var timePlus = $(this).attr("data-time-plus");
      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, Number(timePlus) + Number(time));
      }
    });
  });
});
