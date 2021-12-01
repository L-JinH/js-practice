"user strict";

//1. 로또 최저순위 최고 순위
/*
1) 조건
0 = 모르는 번호

비교할 번호 array lottos
당첨 번호 array win_nums

최고 순위: 일치 번호 + 0 갯수
최저 순위: 일치 번호

- 일치 번호 찾기 => 일치 값 찾기 필요.
- 0 갯수 구하기.(lottos) => 한 배열에 0을 전부 찾아서 갯수를 저장 필요. : filter && length in const

순위 // 순위 알아야함.
그 외 = 6등
2개 일치 = 5등
3게 일치 = 4등
4개 일치 = 3등
5개 일치 = 2등
6개 일치 = 1등.

function solution () {
    최고 순위, 최저 순위 나란히 array로 출력.
} => array에 저장 필요.
*/

const win_nums = [1, 2, 3, 4, 5, 6];
const lottos = [1, 3, 0, 0, 7, 0];
// 일치: 1, 3 = 2개 최저: 5등
// 2 + 0개수 3 = 5 최고: 2등
/* 
// 0 숫자
const zeroCount = lottos.filter((zero) => zero === 0).length; // 3개

//일치 숫자
const correspondNum = lottos.filter((num) => win_nums.includes(num)).length; // 2개

const maxNum = correspondNum + zeroCount;
const minNum = correspondNum;

// console.log(winNum);

const ab = [];

ab.push(maxNum, minNum);

const rank = [6, 6, 5, 4, 3, 2, 1];

console.log(`최고순위:${rank[maxNum]}`, `최저순위:${rank[minNum]}`);
*/

/* 답안
function solution(lottos, win_nums) {
    
    const rank = [6,6,5,4,3,2,1];
    let min = lottos.filter(lot => win_nums.includes(lot)).length;  //2
    let max = lottos.filter(lot => !lot).length;  //2
    
    const maxCount = min+max;  // 4
    
    return [rank[maxCount],rank[min]];
    

}
*/

/* 
switch 이용

switch (maxNum) {
    case 6:
        console.log("최고순위: 1등");
        break;

    case 5:
        console.log("최고순위: 2등");
        break;

    case 4:
        console.log("최고순위: 3등");
        break;

    case 3:
        console.log("최고순위: 4등");
        break;

    case 2:
        console.log("최고순위: 5등");
        break;

    case 1:
        console.log("최고순위: 6등");
        break;

    case 0:
        console.log("최고순위: 6등");
        break;
}

switch (minNum) {
    case 6:
        console.log("최저순위: 1등");
        break;

    case 5:
        console.log("최저순위: 2등");
        break;

    case 4:
        console.log("최저순위: 3등");
        break;

    case 3:
        console.log("최저순위: 4등");
        break;

    case 2:
        console.log("최저순위: 5등");
        break;

    case 1:
        console.log("최저순위: 6등");
        break;

    case 0:
        console.log("최저순위: 6등");
        break;
}
*/
//switch를 쓰면 funtion으로 쓰기엔 너무 길고 힘들어서 array를 쓰기로 함.

/* 내 답 */
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const zeroCount = lottos.filter((zero) => zero === 0).length;
    // let zeroCount = lottos.filter(lot => !lot).length; : !0 =true
    const minNum = lottos.filter((num) => win_nums.includes(num)).length;

    const maxNum = minNum + zeroCount;

    return [rank[maxNum], rank[minNum]];
}
