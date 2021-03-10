"use strict";

let menuButtonOpen = document.querySelector(".page-header__open-menu");
let menu = document.querySelector("#main-menu");
let menuButtonClose = menu.querySelector(".menu__close-button");
menuButtonOpen.addEventListener("click", (evt) => {
    evt.target.setAttribute("aria-expanded", "true");
});
menuButtonClose.addEventListener("click", () => {
  menuButtonOpen.setAttribute("aria-expanded", "false");
});
