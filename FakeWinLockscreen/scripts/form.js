
var url = "https://arc.msn.com/v3/Delivery/Placement?pid=209567&fmt=json&rafb=0&ua=WindowsShellClient%2F0&cdm=1&disphorzres=9999&dispvertres=9999&lo=80217&pl=en-US&lc=en-US&ctry=ch&time=2022-03-17T23:59:59Z"

$.ajax(url).done(function (data) {
    var json = $.parseJSON(data);
    console.log(json.batchrsp.items[2].item.image_fullscreen_landscape_001);
});

// On input gaining focus
$(".text-body input").on("focus", function () {
  $(this).addClass("focus");
})

// On input losing focus
$(".text-body input").on("blur", function () {
  if ($(this).val() == "") {
    $(this).removeClass("focus");
  }
})

// use right-click to go back to the idle screen
$(".darken").on("contextmenu", function () {
    var element = document.getElementById('darken');
    element.style.opacity = "0.0";
    $(".hide").show();
    $("#battery-icon").attr("hidden", false);
    $("#ease-icon").attr("hidden", true);
    $("#power-icon").attr("hidden", true);
    $(".login-form *").attr("hidden", true);
    return false; // don't show context menu by cancelling the event
})

$("body *").on("mousedown", function () {
    var element = document.getElementById('darken');
    element.style.opacity = "0.5";
    $(".hide").hide();
    $("#battery-icon").attr("hidden", true);
    $("#ease-icon").attr("hidden", false);
    $("#power-icon").attr("hidden", false);
    $(".login-form *").attr("hidden", false);
})

$(document).keydown(function() {
    var element = document.getElementById('darken');
    element.style.opacity = "0.5";
    $(".hide").hide();
    $("#battery-icon").attr("hidden", true);
    $("#ease-icon").attr("hidden", false);
    $("#power-icon").attr("hidden", false);
    $(".login-form *").attr("hidden", false);
})

$(".glass-text-1 *").on("mouseover", function () {
    $(".glass-text-1").css('background', 'rgba(0,0,0,0.5)');
    $(".glass-background-1").css('background', 'rgba(0,0,0,0.5)');
    $(".sub-glass-text-1").attr("hidden", false);
})

$(".glass-text-1 *").on("mouseleave", function () {
    $(".glass-text-1").css('background', 'rgba(0,0,0,0)');
    $(".glass-background-1").css('background', 'rgba(0,0,0,0.3)');
    $(".sub-glass-text-1").attr("hidden", true);
})

$(".glass-text-2 *").on("mouseover", function () {
  $(".glass-text-2").css('background', 'rgba(0,0,0,0.5)');
  $(".glass-background-2").css('background', 'rgba(0,0,0,0.5)');
  $(".sub-glass-text-2").attr("hidden", false);
})

$(".glass-text-2 *").on("mouseleave", function () {
  $(".glass-text-2").css('background', 'rgba(0,0,0,0)');
  $(".glass-background-2").css('background', 'rgba(0,0,0,0.3)');
  $(".sub-glass-text-2").attr("hidden", true);
})

$(".camera-text *").on("mouseover", function () {
  $(".camera-text").css('background', 'rgba(0,0,0,0.5)');
  $(".camera-background").css('background', 'rgba(0,0,0,0.5)');
  $(".sub-camera-text").attr("hidden", false);
})

$(".camera-text *").on("mouseleave", function () {
  $(".camera-text").css('background', 'rgba(0,0,0,0)');
  $(".camera-background").css('background', 'rgba(0,0,0,0.3)');
  $(".sub-camera-text").attr("hidden", true);
})
