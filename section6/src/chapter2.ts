/**
 * 타입변수 응용하기
 */

//case1.
//함수 선언문 (function)은 반환 타입을 생략해도 TypeScript가 자동으로 추론
//반면에 화살표 함수(const swap2 = (..) => ..)는 조금 더 엄격해서, 명시해주는 것이 일반적
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const swap2 = <T, U>(a: T, b: U): (T | U)[] => {
  return [b, a];
};

let [a, b] = swap(1, 2);
console.log(a); //2
console.log(b); //1

//case2.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
const returnFirstValue2 = <T>(data: [T, ...unknown[]]) => {
  return data[0];
};

let num = returnFirstValue([100, 99, 98]); //number type
let str = returnFirstValue([1, "apple", "orange", "banana"]); //number type
let str2 = returnFirstValue2([1, "apple", "orange", "banana"]); //number type

//case3.
function getLength<T extends { length: number }>(data: T) {
  //T는 length라는 숫자 속성을 가진 객체만 가능하다.
  //length: number 속성이 반드시 존재해야 하는 타입만 허용한다는 제약 조건
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("123456");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); (X)

// `extends` 키워드를 사용하면 타입 변수 `T`의 타입을 특정 구조나 속성을 가진 타입으로 제한할 수 있다
// 덕분에 제네릭 코드 내에서 해당 속성을 안전하게 사용할 수 있다
