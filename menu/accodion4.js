const listEvent = document.querySelectorAll(".main_menu>li");
const addEvent = document.querySelectorAll(".sub_menu");
const Btn = document.querySelector("#menu_btn");

Btn.addEventListener("click", function () {
  // for (let i = 0; i < addEvent.length; i++) {
  //   addEvent[i].classList.toggle("active");
  // }
  toggleList();
});

function toggleList() {
  for (let i = 0; i < addEvent.length; i++) {
    addEvent[i].classList.toggle("active");
  }
}
