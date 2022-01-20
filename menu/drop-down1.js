/* * * * * step1. header의 길이만 변경하기. * * * * * */
/* 
1) nav에 마우스를 올리면 (mouseover) header길이를 270px;로 늘리기.
2) 마우스가 떠나면 (mouseout) header길이가 원래 header길이로 돌아가기.

nav.addEventListener("mouseover", function () {
  마우스가 올라가면 할 일.
});

- 필요한 것.
nav, header
*/

/*
const header = document.querySelector("header");
const nav = document.querySelector("nav");


nav.addEventListener("mouseover", function () {
  header.style.height = "270px";
});

nav.addEventListener("mouseout", function () {
  header.style.height = "50px";
});

*/

// 문제점: header 밑에 content가 있을 때, 같이 아래로 밀림.
/*
해결 방법
1) header에 적용.
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  2) body에 적용.
  padding-top: 70px; (header 높이 50px + header margin-top 20px)
  */

/* * * * * step2. header의 길이만 변경하기. * * * * * */
/*
1) main menu의 li에 마우스를 올리면(mouseover) 서브메뉴 높이 중 제일 높은 메뉴 만큼 늘어남.
2) 마우스가 떠나면 (mouseout) header길이가 원래 header길이로 돌아가기.
3) li에 올리면 margin에서 mouseover가 끊기므로 margin을 빼고 padding을 넣기.

- 필요한 것.
mainmenu > li, subMenu
subMenu의 높이를 저장할 변수
header 높이 저장할 변수
크기를 가져오는 함수 offset

- 해야할 일
1) submenu에 height에 저장하기.
2) mainmenuList에 mouseover, mouseout 이벤트 넣기.
*/

/* 
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const mainmenuList = document.querySelectorAll(".mainmenu > li");
const subMenu = document.querySelectorAll(".submenu");
let headerHeight = header.offsetHeight;
let subMenuHeight = 0;
*/
/*
// 1) submenu에 height에 저장하기.
for (let i = 0; i < subMenu.length; i++) {
  if (subMenu[i].offsetHeight > subMenuHeight) {
    subMenuHeight = subMenu[i].offsetHeight;
  }
}
*/

/* 
1. i = 0
2. if문의 subMenu[i]의 i도 0.
3. subMenu[i]의 height는 100.
4. subMenuHeight = 0; 보다 큼.
5. if문 실행 = subMenu[0]의 height가 subMenuHeight에 저장.
=> 조건이 안맞을 때까지 계속 반복.
*/

/*
// 2) mainmenuList에 mouseover, mouseout 이벤트 넣기.
for (let j = 0; j < mainmenuList.length; j++) {
  mainmenuList[j].addEventListener("mouseover", function () {
    header.style.height = headerHeight + subMenuHeight + "px";
  });

  mainmenuList[j].addEventListener("mouseout", function () {
    header.style.height = headerHeight + "px";
  });
}
*/

/* * * * * step3. hover한 list만 그 높이대로 열리기. * * * * * */

//mouseover하면 mainmenuList의 subMenu의 height를 변수명 headerHeight에 저장하고,
//header의 height 높이를 headerHeight + headerHeight로 변경.

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const mainmenuList = document.querySelectorAll(".mainmenu > li");
const subMenu = document.querySelectorAll(".submenu");
let headerHeigth = header.offsetHeight;
let subMenuHeight = 0;

for (let z = 0; z < mainmenuList.length; z++) {
  mainmenuList[z].addEventListener("mouseover", function () {
    subMenuHeight = this.querySelector(".submenu").offsetHeight;
    header.style.height = headerHeigth + subMenuHeight + "px";
  });

  mainmenuList[z].addEventListener("mouseout", function () {
    header.style.height = headerHeigth + "px";
  });
}

/**/
