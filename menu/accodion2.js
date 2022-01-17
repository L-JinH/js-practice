let panelQuestion = document.querySelectorAll(".panel-question");
let collapseBtn = document.querySelector("#btn-collapse");

for (let i = 0; i < panelQuestion.length; i++) {
  panelQuestion[i].addEventListener("click", function () {
    closeAll();

    this.classList.add("active");
    //this: 클릭 이벤트가 일어난 요소 =  panelQuestion[i]
  });
}

collapseBtn.addEventListener("click", function () {
  // 내 답
  //   let collapseActive = document.querySelector(
  //     ".panel-question.active .panel-body"
  //   );

  //   collapseActive.style.display = "none";

  closeAll();
});

function closeAll() {
  for (let z = 0; z < panelQuestion.length; z++) {
    panelQuestion[z].classList.remove("active");
  }
}
