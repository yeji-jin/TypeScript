// ----- 07. any 타입
// 특정 변수의 타입을 확실히 모를때 사용
// 모든 타입 할당받을 수 있고, 반대로 모든 타입의 변수에 할당 할 수 있다.
// 최대한 지양
let anyVar: any = 10;
anyVar = "1000";
anyVar = true;
anyVar = {};
anyVar = () => {};

let num10: number = 10;
num10 = anyVar;
console.log(num10); //[Function: anyVar]

// ----- 08. Unknown 타입
let UnknownVar: unknown;
UnknownVar = "";
UnknownVar = 12345;
UnknownVar = {};
UnknownVar = () => {};
UnknownVar = false;
UnknownVar = 99;

/*
  any 와 unknown 차이
  any :: 모든 타입 할당받을 수 있고, 반대로 모든 타입의 변수에 할당 할 수 있다.
  unknown :: 모든 타입 할당받을 수 있다. / 메서드, 연산 사용 X
*/
// 만약 unknown의 값을 사용하고싶다면 ? (타입정제)
if (typeof UnknownVar === "number") {
  num10 = UnknownVar;
  console.log(num10);
}

/*
특정 변수의 타입을 확실히 모를때?
any 보다 unknown을 사용하는것이 더 안정적
unknown은 아무 메서드나 연산이나 값을 넣을 수 없음 -> 런타임에러 X
*/
