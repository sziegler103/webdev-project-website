$(document).ready(function() {
  
  // 1st animation: hide on click
  $(".hideBox").click(function() {
    $(this).hide(400).delay(1000).show(400);
  });

  // 2nd animation: pulsing image
  pulseImgToggle();

  // 3rd animation: staggered arrows
  $(".arrows").click(arrowAnimation);
  
  // 4th animation: moving square
  $(".swingingRectangle").click(swingRect);

  // 5th animation: sliding rectangles
  slideRects();
});


function pulseImgToggle() {
  $("#pulse2").fadeToggle(2000, pulseImgToggle);
}

function arrowAnimation() {
  // Staggered move right
  $("#arrow1").animate({
    right: "-45px"
  }, 400);
  $("#arrow2").delay(200).animate({
    right: "-30px"
  }, 400);
  $("#arrow3").delay(400).animate({
    right: "-15px"
  }, 400);

  // Staggered fade out (fadeOut() removes object so opacity animated instead)
  $("#arrow1").animate({
    opacity: 0
  }, 400)
  $("#arrow2").animate({
    opacity: 0
  }, 400)
  $("#arrow3").animate({
    opacity: 0
  }, 400)

  // Reset positions
  $("#arrow1").animate({
    right: "-15px"
  }, 400);
  $("#arrow2").animate({
    right: "0px"
  }, 400);
  $("#arrow3").animate({
    right: "15px"
  }, 400);

  // Staggered fade in
  $("#arrow1").animate({
    opacity: 1
  }, 200)
  $("#arrow2").animate({
    opacity: 1
  }, 200)
  $("#arrow3").animate({
    opacity: 1
  }, 200)
}

function swingRect() {
  $(".swingingRectangle").clearQueue();
  $(".swingingRectangle").animate({
    left: 280,
    width: 70
  }, 1000)
  $(".swingingRectangle").delay(500).animate({
    left: 20,
    width: 100
  }, 1000)
}

function slideRects() {
  $(slide1).slideUp(1000).slideDown(1000);
  $(slide2).delay(1000).slideUp(1000).slideDown(1000);
  $(slide3).delay(2000).slideUp(1000).slideDown(1000, slideRects);
}