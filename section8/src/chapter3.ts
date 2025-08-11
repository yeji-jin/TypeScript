/**
 * infer - 조건부 타입 내에서 타입 추론하기
 * inference - 추론하다
 * `infer`는 조건부 타입의 `extends` 절 패턴 매칭 중에 특정 위치의 타입을 '추론'할 때 사용
 * 추론된 타입은 조건부 타입의 결과로 활용
 */

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

// infer R -> R을 추롡
type A = ReturnType<FuncA>; //string
type B = ReturnType<FuncB>; //number
type C = ReturnType<number>; //never -> 추론불가

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T는 프로미스 타입이어야한다.
//2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; //number
type PromiseB = PromiseUnpack<Promise<string>>; //string
