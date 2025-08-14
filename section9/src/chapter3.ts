/**
 * Exclude<T,U>
 * -> 제외,추방하다
 * -> T에서 U를 제거
 */

type A = Exclude<string | boolean, boolean>;
//type A = string

//Exclude 타입 직접구현
type Exclude2<T, U> = T extends U ? never : T;
//1. Exclude2<string, boolean> |
//2. Exclude2<boolean, boolean>
//3. string | never
//4. string

/**
 * Extract<T,U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;
//type A = boolean

//Extract 타입 직접구현
type Extract2<T, U> = T extends U ? T : never;
//1. Extract2<string, boolean> |
//2. Extract2<boolean, boolean>
//3. never | boolean
//4. boolean

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return "hello";
}
function funcB() {
  return 123;
}

type ReturnA = ReturnType<typeof funcA>;
//type ReturnA = string

type ReturnB = ReturnType<typeof funcB>;
//type ReturnB = number

//ReturnType 타입 직접구현
type ReturnType2<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : any;
