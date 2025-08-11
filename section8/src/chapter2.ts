/**
 * 분산적인 조건부타입
 *분산적 조건부 타입은 유니온 타입의 각 멤버에 대해 조건부 타입을 개별적으로 적용한 뒤, 그 결과들을 다시 유니온으로 합침
 *`[T] extends [U]`와 같이 `extends` 키워드의 양쪽에 타입을 대괄호로 감싸면 조건부 타입의 분산적인 동작이 일어나지 않음
 *유니온 타입 전체를 하나로 판단하게 됩니다.
 */

type TypeSwitch<T> = T extends number ? string : number;
let varA: TypeSwitch<number | string>; // string | number
//타입 변수에 유니온타입을 할당하면, 분산적인 조건부타입
// (과정) 유니온타입의 모든 타입들이 분리되어 전달
// 분리된 결과들을 유니온으로 묶음
//1. TypeSwitch<number> 전달 (string)
//2. TypeSwitch<string> 전달 (number)

let varB: TypeSwitch<boolean | number | string>; // string | number
// 1단계
//1. TypeSwitch<boolean> 전달
//2. TypeSwitch<number> 전달
//3. TypeSwitch<string> 전달

// 2단계
// 1번 결과-> number
// 2번 결과-> string
// 3번 결과-> number
// number | string | number ->  number | string

/* 예제 */
//함수 오버로딩은 입력 타입별로 정확한 함수 시그니처를 여러 개 정의하여 타입스크립트가 더 정확하게 타입을 추론하고 안전성을 확보
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>; // number | boolean
// 1단계
/*
  1. Exclude<number, string> |
  3. Exclude<string, string> |
  3. Exclude<boolean, string> 
*/

// 2단계
/*
  1번결과 -> number |
  2번결과 -> never |
  3번결과 -> boolean
*/

// 결과
// number | never | boolean  (유니온타입에 네버타입이 포함되어 있다면 사라짐)
// -> number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// 1단계
/*
  1. Extract<number, string> |
  3. Extract<string, string> |
  3. Extract<boolean, string> 
*/

// 2단계
/*
  1번결과 -> never |
  2번결과 -> string |
  3번결과 -> never
*/

// 결과
// string
