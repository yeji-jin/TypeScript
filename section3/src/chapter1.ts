/**
 * 함수 타입 정의
 */

// 어떤 "타입"의 매개변수를 받고 어떤 "타입"의 결과값을 반환하는지?
function func(a: number, b: number) {
  return a + b;
}
/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 기본값에 따른 타입추론
 */
const introduce = (name = "홍길동", age?: number) => {
  // 필수매개변수, 선택적매개변수 -> 필수 매개 변수는 선택적 매개 변수 뒤에 올수 없음 (앞에배치해야함)
  console.log(`안녕 ${name}`);
  if (typeof age === "number") console.log(`${age}살`);
};
// introduce(123); X => 자동추론된 매개변수의 타입과 다른 타입을 인수로 전달시 에러
introduce("뿡뿡", 20);
introduce("뿡빵이");

const getSum = (...rest: number[]) => {
  // 매개변수의 개수를 고정하려면 튜플타입으로 설정 ->  (...rest: [number,number,number])
  let sum = 0;
  rest.forEach((number) => (sum += number));
  console.log(sum);
  return sum;
};
getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
