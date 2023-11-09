const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeButton");
const overlayContainer = document.querySelector(".overlayHidden");

openMenu.addEventListener("click", function clickOpenMenu() {
  overlayContainer.classList.toggle("overlay");
  overlayContainer.classList.remove("overlayHidden");
});
closeMenu.addEventListener("click", function clickCloseMenu() {
  overlayContainer.classList.remove("overlay");
  overlayContainer.classList.toggle("overlayHidden");
});
