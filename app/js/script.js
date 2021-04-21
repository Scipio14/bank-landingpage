const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  //console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
