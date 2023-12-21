const img = document.querySelector("img");

img.addEventListener("mousedown", function(event) {
  event.preventDefault();
});




const img = document.querySelector("img");

window.addEventListener("resize", function() {
  img.style.width = window.innerWidth;
  img.style.height = window.innerHeight;
});
