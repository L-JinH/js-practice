const allBtn = document.querySelector(".btn");
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

allBtn.addEventListener("click", function () {
  for (let z = 0; z < body.length; z++) {
    body[z].style.display = "none";
  }
});

/* 
const allBtn = document.getElementsByClassName(".btn");
=> const allBtn = document.querySelector(".btn");

getElementsByClassName는 nodelist를 가져와서.

*/
