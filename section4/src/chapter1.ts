/**
 * 인터페이스
 */

interface IPerson {
  readonly name: string;
  age?: number;
  sayHi(): void; //호출 시그니처
  sayHi(a: number, b: number): void; //호출 시그니처
  //메소드 오버로딩은 이름은 같지만 시그니처가 다른 메소드를 여러 개 정의하는 것
  //인터페이스에서는 호출 시그니처를 사용해야만 이러한 형태의 정의가 가능
}

const person: IPerson = {
  name: "홍시",
  //   age: 1,
  sayHi: () => console.log("Hi"),
};

person.sayHi();
person.sayHi(1, 2);

// interface로 만든 객체의 타입은 유니온(|) / 인터섹션(&) X
// interface IPerson {
//   name: string;
//  } & number;
type Type1 = number | string;
type Type2 = number & string;

// 타입 별칭으로 활용 O
type Type3 = number | IPerson;
// 타입 주석에 활용 O
const person2: IPerson | number = {
  name: "홍시",
  age: 1,
  sayHi: () => console.log("Hi"),
};
