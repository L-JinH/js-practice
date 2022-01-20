const header = document.querySelector("header");
let headerHeight = header.offsetHeight;
const nav = document.querySelector("nav");
const mainMenuList = document.querySelectorAll(".mainmenu>li");
const subMenu = document.querySelectorAll(".submenu");
let subMenuHeight = 0;

/*
// step1. nav 길이만 변경
nav.addEventListener("mouseover", function () {
  header.style.height = "270px";
});

nav.addEventListener("mouseout", function () {
  header.style.height = "50px";
});

// step2. mainMenuList에 마우스를 올리면 서브메뉴 높이 중 제일 높은 메뉴 만큼 늘어남.
// step2-1. CSS: margin 빼고 padding 넣어서 메뉴 중간에 여백 없애기

//offset(크기 가져오기.) height을 가져와서 높이를 subMenuHeight에 저장.
for (let i = 0; i < subMenu.length; i++) {
  //   subMenuHeight = subMenu[i].offsetHeight; 가장 마지막에 있는 요소의 높이만 나오게 됨.
  if (subMenu[i].offsetHeight > subMenuHeight) {
    subMenuHeight = subMenu[i].offsetHeight;
  }

// 1. i = 0
// 2. if문의 subMenu[i]의 i도 0.
// 3. subMenu[i]의 height는 100.
// 4. subMenuHeight = 0; 보다 큼.
// 5. if문 실행. 
// 6. subMenu[0]의 height가 subMenuHeight에 저장.
=> 조건이 안맞을 때까지 계속 반복.

}
// subMenuHeight + nav의 height = header height

for (let j = 0; j < mainMenuList.length; j++) {
    mainMenuList[j].addEventListener("mouseover", function () {
        header.style.height = headerHeight + subMenuHeight + "px";
        //뒤에 단위도 써줘야 함.
    });
    mainMenuList[j].addEventListener("mouseout", function () {
        header.style.height = headerHeight + "px";
    });
}
*/

//step3. hover한 list만 그 높이대로 열리기.
//mouseover하면 그 요소의 자식요소(ul)의 height를 변수명 subMenuHeight에 저장하고,
//header의 height 높이를 headerHeight + subMenuHeight로 변경.
for (let j = 0; j < mainMenuList.length; j++) {
  mainMenuList[j].addEventListener("mouseover", function () {
    subMenuHeight = this.querySelector(".submenu").offsetHeight;
    //this = mouseover가 일어난 곳.
    header.style.height = subMenuHeight + headerHeight + "px";
  });
  mainMenuList[j].addEventListener("mouseout", function () {
    header.style.height = headerHeight + "px";
  });
}
