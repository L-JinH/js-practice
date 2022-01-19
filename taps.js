//click할 link : 1, 2번
const targetLink = document.querySelectorAll(".tab-menu a");
// 모두 가리고 원하는 것만 가져오기 위해 필요함. : 3번
const tabContent = document.querySelectorAll("#tab-content>div");

//# click하면 할 일.
//1. a(for문사용)를 click.
// => addEventListener('click' function(){ 'click하면 할 일'})

//2. click하면 할 일.
//2-1. link의 기본 속성 막기. : ev.preventDefault();
//2-2. 어떤 것을 클릭하는지 알고서(target), a의 href(속성) 가져오기. (변수:orgTarget)
// => 속성을 가져오는 것은 getAttribute();
//2-3. 변수 tapTarget를 생성해서 가져온 속성에서 #을 빼기.(a.replace("#", ""))
// => a.replace('b', 'c'); : 변수 안에서 b라는 문자를 c로 바꿀 수 있다.

//3. 내가 원하는 것만 가져오기.
//3-1. tab-content의 내용을 안보이게 하기.
//3-2. #을 땐 값을 document.getElementById로 불러와 style.display = 'block';을 한다.

//4. active를 이용해서 클릭한 곳 표시하기.
//4-1. css에서 .active가 있을 때 어떻게 표시할지 정하기.
//4-2. taps-1은 항상 표시되게 하기.
//4-3. .active를 click된 a 태그마다 옮기기. (targetLink)

for (let i = 0; i < targetLink.length; i++) {
  //1
  targetLink[i].addEventListener("click", function (ev) {
    //2-1
    ev.preventDefault();
    //2-2
    let orgTarget = ev.target.getAttribute("href");
    //console 확인. console.log(orgTarget);
    //2-3
    let tapTarget = orgTarget.replace("#", ""); //"tabs-1";

    //3-1
    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }

    //3-2
    document.getElementById(tapTarget).style.display = "block";

    //4-3
    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("active"); //다 빼기.
      ev.target.classList.add("active"); //click한 놈만 추가.
    }
  });
}

//4-2
document.getElementById("tabs-1").style.display = "block";
