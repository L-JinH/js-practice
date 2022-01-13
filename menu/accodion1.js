const btn = document.getElementsByClassName("btn");
const qestions = document.getElementsByClassName("qestions");
const header = document.getElementsByClassName("header");
const body = document.getElementsByClassName("body");

// for문으로 active 감지해서 있으면 빼고 없으면 넣기.

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function (event) {
    for (let j = 0; j < qestions.length; j++) {
      qestions[j].classList.remove("active");
      event.target.parentNode.classList.add("active");
    }

    accodion();
  });
}

function accodion() {
  for (let x = 0; x < body.length; x++) {
    body[x].style.display = "none";
  }

  let open = document.querySelector(".qestions.active .body");
  open.style.display = "block";
}

accodion();

// btn.addEventListener("click", function () {
//   for (let q = 0; q < body.length; q++) {
//     body[q].style.display = "none";
//   }
// });
