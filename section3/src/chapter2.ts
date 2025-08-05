/**
 * 함수 타입 표현식
 */

// type Operation = (매개변수 타입 정의) => 반환값 타입정의
type Operation = (a: number, b: number) => number;

// 비슷한 형식의 함수에 사용가능 -> 중복 타입 정의 줄일 수 있다.
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */
type Operation2 = {
  (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
