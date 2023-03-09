"use strict";

const operationButtons = document.querySelectorAll(
  ".operations .operations-tab .btn"
);
const operationContexts = document.querySelectorAll(
  ".operations .operations-context"
);

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", () => {
    if (operationButton.classList.contains("btn-active")) {
      operationButton.classList.remove("btn-active");
    } else {
      const operationBtnWithActive = document.querySelector(
        ".operations .operations-tab .btn.btn-active"
      );

      if (operationBtnWithActive) {
        operationBtnWithActive.classList.remove("btn-active");
      }
      operationButton.classList.add("btn-active");
    }
  });
});

// operationButtons.forEach((operationButton) => {
//   operationButton.addEventListener("click", () => {

//   });
// });

// Owl-Carousel
$(document).ready(function () {
  $("#mainSlider").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    mouseDrag: false,
  });
});

// Sticky navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("header nav");
  if (this.window.scrollY > 600) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Modal Window
const openAccountBtns = document.querySelectorAll(".open-account-btn");
const closeBtn = document.querySelector("#modal-window .fa-times");
const layout = document.querySelector(".layout");
const modalWindow = document.querySelector("#modal-window");
const modalNextBtn = document.querySelector("#modal-window a.modalNextBtn");

// $(openAccountBtn).click(function (e) {
//   e.preventDefault();
//   // $("#modal-window").addClass("open");

//   // if ($("#modal-window").hasClass("open")) $(body).addClass("blur");
//   $(".blurredDiv").addClass("enableBlur");
// });

// $(closeBtn).click(function (e) {
//   e.preventDefault();
//   $("#modal-window").removeClass("open");
//   // $("body").removeClass("blur");
// });

openAccountBtns.forEach((openAccountBtn) => {
  openAccountBtn.addEventListener("click", function () {
    layout.style.display = "block";
    modalWindow.style.opacity = 1;
    modalWindow.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

function closeModalWindow() {
  layout.style.display = "none";
  modalWindow.style.opacity = 0;
  modalWindow.style.transform = "translate(-50%, -50%) scale(0)";
}

document.addEventListener("keyup", function (e) {
  if (e.which == 27) {
    closeModalWindow();
  }
});

closeBtn.addEventListener("click", function () {
  closeModalWindow();
});

modalNextBtn.addEventListener("click", function () {
  this.setAttribute("href", "");
});
