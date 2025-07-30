// 객체 타입간의 호환성
// ㄴ 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "구름이",
  color: "white",
  breed: "푸들",
};

animal = dog; // (O)
// dog = animal; (X)
/*
  ----------------------------
    Animal  <----  Dog  (O) :: 업캐스팅 / Dog타입을 포함하는 슈퍼타입
    Animal  ---->  Dog  (X) :: 다운캐스팅 / Animal타입의 서브타임
  ----------------------------  

  객체타입은 property를 기준으로 이런 관계를 가짐
  추가 property가 없는 (=조건이 더 적은) 타입이 슈퍼타입이 됨
 */

type Book = {
  //슈퍼타입
  name: string;
  price: number;
};
type ProgrammingBook = {
  //서브타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBookbook: ProgrammingBook = {
  name: "타입스크립트 배우기",
  price: 33000,
  skill: "typescript",
};
book = programmingBookbook;
console.log(book); //{ name: '타입스크립트 배우기', price: 33000, skill: 'typescript' }
// programmingBookbook = book; (X)

// 초과 property 검사
// ㄴ 변수를 초기화 할 때, 초기화하는 값으로 객체 리터럴을 사용할때 발동하는 검사
let book2: Book = {
  name: "타입스크립트 배우기",
  price: 33000,
  // skill: "typescript", (X)
};
const bookFunc = (book: Book) => {};
bookFunc({
  name: "타입스크립트 배우기",
  price: 33000,
  // skill: "typescript", (X)
});

// 초과 property 검사를 피하려면 ?
// ㄴ 변수에 저장해두었다가 할당
let book3: Book = programmingBookbook;
bookFunc(programmingBookbook);
console.log(book3); //{ name: '타입스크립트 배우기', price: 33000, skill: 'typescript' }
