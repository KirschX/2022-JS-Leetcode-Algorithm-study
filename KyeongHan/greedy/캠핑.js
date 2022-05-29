// 백준 4796번
/*
문제 설명
1. 캠핑장은 연속하는 P일 중 L일 동안만 사용 가능.
2. 휴가가 V일 일 경우 캠핑장을 최대 며칠 이용 가능한가?

idea 
V일을 P로 나누면 L일 동안 사용할 수 있는 unit의 갯수 나옴
이후 나머지 일수만 계산 하면 됨
*/

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 마지막 0 0 0 제거
input.pop();

input.map((lpv, i) => {
  const r_input = lpv.split(' ').map((a) => +a);
  const [L, P, V] = r_input;
  let result = 0;
  let rest = V % P > L ? L : V % P;
  result = parseInt(V / P) * L;
  result += rest;
  console.log(`Case ${i + 1}: ${result}`);
});
