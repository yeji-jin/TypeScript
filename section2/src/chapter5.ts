// 타입 단언
type Person = {
  name: string;
  age: number;
};
let person = {} as Person; // 타입단언

// let person = {} 뒤늦게 추가하려면 에러발생
// let person = {} as Person; 방식사용
person.name = "홍길동";
person.age = 99;

type Dog = {
  name: string;
  color: string;
};
let dog = {
  name: "돌돌이",
  color: "white",
  breed: "푸들",
} as Dog; //타입 단언

/**
 * 타입 단언의 규칙
 * ${값} as ${단언} <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입
// let num3 = 10 as string; X

/**
 * const 단언
 */
let num4 = 10 as const; //number 리터럴타입으로 추론됨

let cat = {
  name: "냥냥이",
  color: "yellow",
} as const; // 모든 property를 readonly 적용

/**
 * Non Null 단언 (!)
 */
// 어떤 값이 null이거나 undefined가 아니라고 단언

type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "게시글1이야",
  author: "김아무개",
};

let title_len: number = post.title.length; //title은 필수 속성이라서 undefined일 일이 없음
let author_len: number = post.author!.length; //author 필수 속성은 아니지만 Non Null 단언
console.log("len", title_len, author_len); //len 6 4
