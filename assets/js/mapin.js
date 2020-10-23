$(document).ready(function () {
  function changeTab(e) {
    e.preventDefault();
    $(".pin").removeClass("drop-it");
    $(".tooltip").removeClass("visible");
    $(this).addClass("active");
    focus($(this).attr("href"));
  }

  function focus(area) {
    $(".layer").removeClass("top");
    $(area).addClass("top").removeClass("faded");
    $(area).children(".pin").addClass("drop-it top");
  }

  $(".controls a").on("click", changeTab);
});

  $("#okmap").click(function(){
    $("#okmap").hide();
    $(".textmap").hide();
    $(".subtextmap").hide();
    $(".textmapMobile").hide();
    document.getElementById("mapdesktop").style.opacity = "1";
    document.getElementById("mapmobile").style.opacity = "1";
  });
