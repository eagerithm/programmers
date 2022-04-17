// [문제] 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// [입력] 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// [출력] 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. 
// x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

// [정답]
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for ( let i = 1; i <= input[0]; i++ ) {
  let numbers = input[i].split(" ");
  let A = parseInt(numbers[0]);
  let B = parseInt(numbers[1]);
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}