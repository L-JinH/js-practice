// querySelectorAll도 가능.
const btnCollapse = document.getElementById("btn-collapse");
const heading = document.getElementsByClassName("panel-heading");
const question = document.getElementsByClassName("panel-question");
const answer = document.getElementsByClassName("panel-body");

// 제목(heading)을 클릭하면 할 일.
// 같은 class가 적용된 것이 많으면 arry형태로 있으니 반복문(for)로 접근해야 함.

// for(시작상태; 조건; 조건이 맞으면 할 일) {}

// i는 0이다(heading[0]). i를 1씩 증가시기는데, heading 길이보가 많아지면 끝낸다.
// heading.length를 쓰는 이유는 숫자로 썼다가 질문란이 한개 더 생길 경우 처리할 수 없어서.

// heading 마다 할 일.
// 1. active를 싹 뺀다. 2. click 한 곳만 active를 부모요소에 추가.
for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function (ev) {
    //const question마다 할 일.
    for (let j = 0; j < question.length; j++) {
      question[j].classList.remove("active");
      ev.target.parentNode.classList.add("active");
      activateBody();
    }
  });
  //많은 class 중 뭘 click 한 것인지 알아야함. target을 써야함.
  // target은 click한 요소를 물고 들어와야하는데 그 때문에 function()에 '매개변수'를 넣음.
  //매개변수: 인자를 밭아서 함수 안으로 전달하는 값.
  //ev: 클릭정보. ev.target: 어떤 것을 클릭했는지 보여줌.
}

// activateBody()가 할 일 2개.
// 1. answer이 다 안보이게 하기.
// 2. active가 있는 question의 andwer을 보이게 하기.
// css로 active가 있는 것의 자식요소를 선택하려면:
// .panel-question.active .panel-body {}
//: active가 있는 것을 찾으려면 class 사이를 띄어쓰기 하지말고 붙여쓰기.

function activateBody() {
  for (let x = 0; x < answer.length; x++) {
    answer[x].style.display = "none";
  }

  let activePanel = document.querySelector(
    ".panel-question.active .panel-body"
  );

  activePanel.style.display = "block";
}

activateBody();
// 이 함수는 클릭해서도 작동하지만 열자마자도 작동함.

// btn을 클릭하면 모두 닫힘.
btnCollapse.addEventListener("click", function () {
  for (let z = 0; z < answer.length; z++) {
    answer[z].style.display = "none";
  }
});

// 배운 것.
//1. 선택 대상이 여러 개가 있을 때는 반복문을 쓰자.
//2. target은 특정 요소를 물고 들어와야하기 때문에 '매개변수'를 사용한다.
//3. 많은 .a 중에서 .b가 있는 요소 중 자식 요소 .ab를 선택하려면  .a.b .ab로 하자. (a와 b 사이 띄어쓰기 안 됨.)
