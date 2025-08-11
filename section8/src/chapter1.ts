/**
 * 조건부 타입 소개
 * 삼항연산자를 이용하여 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string ? string : number; //number type

type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: string;
};
//ObjB가 ObjA의 서브타입인지? (ObjB 타입의 값을 ObjA 타입 변수에 넣을 수 있는가?)
//ObjB는 ObjA의 property를 가지고 있기 떄문에 true
/*
ObjA는 a만 있으면 되고, ObjB는 a뿐만 아니라 b도 있다
즉, ObjB는 ObjA가 요구하는 조건을 모두 만족하고, 추가 속성이 있는 건 문제되지 않음
그래서 ObjB는 ObjA에 할당 가능 → extends 판정에서 true.
*/
type B = ObjB extends ObjA ? number : string; //number type

/**
 * 제네릭과 조건부타입
 */

//T가 number타입을 확장하는 타입이라면?
type TypeSwitch<T> = T extends number ? string : number;
let varA: TypeSwitch<number>; //string
let varB: TypeSwitch<string>; //number
let varC: TypeSwitch<10>; //string

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("zz gg hh"); //zzgghh
result = result.toUpperCase();
console.log(result); //ZZGGHH

let result2 = removeSpaces(undefined);

/*
A extends B는
"A 타입이 B 타입에 할당 가능할 때" → true
"A가 B 타입인가?" 라고 해석
조금 더 정확히는 "A 타입을 B 타입 변수에 담을 수 있는가?"

조건부 타입에서 `extends`는 앞의 타입(T)이 뒤의 타입(U)에 할당 가능한 서브타입인지 확인하는 데 사용 
이 조건 결과에 따라 A 또는 B 타입으로 결정
*/
