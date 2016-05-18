var link = document.querySelector(".communication");
var popup = document.querySelector(".modal_content");
link.addEventListener("click", function(event) {
  event.preventDefault();
popup.classList.add("modal_content_show");
});
 var close = document.querySelector(".modal_content .close");
 close.addEventListener("click", function(event) {
   event.preventDefault();
 popup.classList.remove("modal_content_show");
 });