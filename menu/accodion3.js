// document.querySelector("#toggle-button").addEventListener("click", function () {
//   document.querySelector(".section.collapsible").classList.toggle("collapsed");
// });

const toggleBtn = document.querySelector("#toggle-button");

toggleBtn.addEventListener("click", function () {
  let collapsidle = document
    .querySelector(".section.collapsible")
    .classList.toggle("collapsed");
});

// max-height 줄이기.
