var images = new Array(
  "abstract.jpg",
  "hoop.jpg",
  "lantern.jpg",
  "plane.jpg",
  "summit.jpg",
  "suntree.jpg"
);
var captions = new Array(
  "This is a macro photograph of a microfiber glasses cleaning cloth. It's admittedly a little strange. I guess I must've been feeling creative that day.",
  "I'm not a sports person at all, but I thought this rugged-looking basketball hoop would look interesting with heavy depth-of-field.",
  "I saw snow being lit up by this lantern at night and thought it would make for an excellent photo.",
  "Everyone need's a cliché airplane photo. This is mine. I'm not much of a traveler so this photo is an especially unlikely thing for me to have.",
  "A particular mountaintop during a particular sunset was being lit with an exceptionally orange hue, so I tried to capture it here.",
  "I definitely damaged my camera's sensor taking this. Don't take pictures of the sun unless you have a SLR camera."
);
var altTexts = new Array(
  "A macro photo of a microfiber cloth",
  "A dilapidated basketball hoop",
  "Snowflakes lit by a lantern-style lamp post at night",
  "A sheet of clouds with the tip of an airliner's wing visible",
  "The top of a snowy mountain lit with orange light from a sunset",
  "The sun showing through multicolored leaves of a tree in the fall"
)
var index = 0;
var timer;

window.addEventListener("load", addListeners);

function addListeners() {
  document.getElementById("previousSlide").addEventListener("click", previousImage);
  document.getElementById("playSlideshow").addEventListener("click", playSlideshow);
  document.getElementById("pauseSlideshow").addEventListener("click", pauseSlideshow);
  document.getElementById("nextSlide").addEventListener("click", nextImage);
}

function changeImage() {
  document.getElementById("slideImage").src="resources/images/slideshow_images/" + images[index];
  document.getElementById("slideImage").alt = altTexts[index];
  document.getElementById("slideCaption").innerHTML = captions[index];
}

function previousImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  changeImage();
}

function playSlideshow() {
  if (timer == null) {
    nextImage();
    timer = setInterval("nextImage()", 2000);
  }
}

function pauseSlideshow() {
  clearInterval(timer);
  timer = null;
}

function nextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0
  }
  changeImage();
}