/**
 * 제네릭
 */

// 제네릭함수
// 함수의 인수에 따라서 반환값의 타입을 가변적으로 정할 수 있다.
// <T> -> 타입변수 선언 (상황에따라 다른 타입을 담을 수 있음 -> 호출할때마다 결정됨)
// 매개변수 : 타입변수
// 반환값 : T
function func<T>(value: T): T {
  return value;
}
//화살표 함수 case 제네릭함수
const func2 = <T>(value: T): T => {
  return value;
};

let str = func("str"); //string type
let num = func(123); //number type
let bool = func(false); //boolean type
let arr = func([1, 2, 3]); //number[] type
let arr2 = func<[number, number, number, string]>([1, 2, 3, "4"]); //튜플 -> [number, number, number, string]
