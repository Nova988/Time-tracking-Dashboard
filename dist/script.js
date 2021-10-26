"use strict";

const dashboardNav = document.querySelector(".dash-nav");
const timeframe = document.querySelectorAll(".timeframe");
const navBtn = document.querySelectorAll(".btn");

console.log(timeframe);

dashboardNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");

  if (!clicked) return;

  timeframe.forEach((x) => x.classList.remove("timeframe--active"));
  navBtn.forEach((btn) => btn.classList.remove("btn--active"));

  // Nav activation color
  clicked.classList.add("btn--active");

  document
    .querySelectorAll(`.timeframe--${clicked.dataset.time}`)
    .forEach((x) => x.classList.add("timeframe--active"));
});
