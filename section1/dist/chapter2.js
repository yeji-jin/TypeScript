// ----- 03. 타입스크립트의 타입 - 배열
let numArr = [1, 2, 3]; //number arr
let strArr = ["1", "2", "3"]; //string arr
let boolArr1 = [true, false, true];
let boolArr2 = [true, false, true]; //제네릭문법
// CASE :: 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = ["string", 123];
// CASE :: 다차원 배열 타입 정의
let doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
];
let doubleArr2 = [
    [1, 2, 3],
    ["4", "5", "6"],
];
let doubleArr3 = [
    [1, 2, 3],
    ["4", "5", "6"],
];
// CASE :: 튜플 - 길이와 타입이 고정된배열
let tub1 = [1, 2];
// (X) tub1=[1,2,3,4,5]
// (X) tub1=["1","2"]
let tub2 = [1, "2", true];
const users = [
    ["김아무개", 1],
    ["이아무개", 2],
    ["박아무개", 3],
    ["홍아무개", 4],
];
// (X) tub2=[true,1,"2"]; 순서바꿈X
// (X) tub2=[1]; 길이다름
// 심화 --------------------------------------------------
tub1.push(3); // ✅ 타입 에러 없음!
console.log(tub1); // [1, 2, 3]
export {};
/*
Q. 왜 push()가 에러가 안 날까?
A. 튜플도 결국은 JavaScript의 배열(Array) 이기 때문에 런타임에서는 push() 같은 메서드를 사용할 수 있어요.
TypeScript는 정해진 위치의 타입만 검사하지, push() / pop() 길이가 변경되는것을 완전히 막지는 않음

🧷 타입 안전하게 유지하려면?
    ㄴ 튜플을 진짜 고정된 구조로 쓰고 싶다면 as const를 활용하거나, readonly를 붙이는 게 좋다.

const tub1 = [1, 2] as const; // push 불가
let tub1: readonly [number, number] = [1, 2];
*/
/*
@ as const란?
🔹 as const
TypeScript에서 아주 많이 쓰이는 상수 단언(Assertion) 문법
👉 “이 값은 절대 바뀌지 않는 고정값(리터럴)으로 간주해줘!” 라는 뜻이에요.

✅ as const는 언제 쓰나?
readonly 배열처럼 쓰고 싶을 때 -> 수정 불가
튜플처럼 사용하고 싶을 때 ->	[number, string] 같은 고정 구조로 처리

const arr = [1, 2, 3] as const;

이제 타입은
readonly [1, 2, 3]
→ 배열의 길이, 값, 순서까지 고정된 튜플로 바뀜

arr.push(4); // ❌ 에러!
arr[0] = 9;  // ❌ 에러!
*/
