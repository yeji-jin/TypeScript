// ----- 09. void 타입
// void -> 공허 -> 아무것도 없다.

const hello = (): string => {
  //반환값 string
  return "hello";
};
const helloLog = (): void => {
  //반환값 없음
  console.log("hello");
};
let a: void; // void타입으로 정의한 변수에는 undefined 제외한 어떠한 값도 담을수 없음
a = undefined;
a = null; //strictNullChecks가 false라면 null도 가능

// ----- 10. never 타입
// never -> 존재하지 않는 -> 불가능한 타입

const func3 = (): never => {
  //무한루프 함수
  //이 함수에 반환값이 있는것이 모순 never
  while (true) {}
};
const func4 = () => {
  //실행시 프로그램 중지 -> 반환값 never
  throw new Error();
};
let b: never; // never타입으로 정의한 변수에는 어떠한 값도 담을수 없음 (undefined / null / any도 불가능)
