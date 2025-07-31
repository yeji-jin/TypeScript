let person = {}; // 타입단언
// let person = {} 뒤늦게 추가하려면 에러발생
// let person = {} as Person; 방식사용
person.name = "홍길동";
person.age = 99;
let dog = {
    name: "돌돌이",
    color: "white",
    breed: "푸들",
}; //타입 단언
/**
 * 타입 단언의 규칙
 * ${값} as ${단언} <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10; // A가 B의 슈퍼타입
let num2 = 10; // A가 B의 서브타입
// let num3 = 10 as string; X
/**
 * const 단언
 */
let num4 = 10; //number 리터럴타입으로 추론됨
let cat = {
    name: "냥냥이",
    color: "yellow",
}; // 모든 property를 readonly 적용
let post = {
    title: "게시글1",
    author: "김아무개",
};
let len = post.author.length;
console.log(len);
export {};
