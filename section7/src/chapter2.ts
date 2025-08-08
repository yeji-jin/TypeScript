/**
 * keyof 연산자
 * `keyof`는 객체 타입의 속성 이름들을 모두 가져와 문자열 리터럴 유니온 타입으로 만들어줌
 * 안전하게 객체 속성에 접근하는 타입을 정의할 수 있음
 */

interface IPerson {
  name: string;
  age: number;
}

//keyof IPerson -> IPerson객체 타입으로부터 모든 property의 key를 유니온타입으로 추출
//=> "name" | "age"
// property가 추가되어도 유니온타입으로 추출 가능
// (주의) keyof 연산자는 무조건 type에만 사용가능!
function getPropertyKey(person: IPerson, key: keyof IPerson) {
  //keyof IPerson === keyof typeof person (둘다 가능)
  console.log(person[key]);
  return person[key];
}

const person: IPerson = {
  name: "홍길동",
  age: 20,
};
getPropertyKey(person, "name"); //홍길동
getPropertyKey(person, "age"); //20

// typeof 연산자는 타입을 정의할때도 사용가능
const person2 = {
  name: "홍길동",
  age: 20,
};
type Person2 = typeof person2; //person2 변수를 추론해서 Person2에 정의
