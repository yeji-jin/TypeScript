/**
 * 인터페이스 합치기
 * 타입 별칭과 달리 인터페이스는 동일 이름으로 여러 번 선언해도 오류 없이 정의된 속성들이 모두 합쳐져 하나의 타입처럼 동작합니다.
 * 이 특징을 선언 병합이라고 합니다
 */

interface Person {
  name: string;
}
interface Person {
  // name:"string"; 인터페이스 합치기 -> 서브타입으로 선언해도 충돌
  name: string; //동일한 property 재선언시 타입도 동일하게 선언해야함
  age: number;
}
const person: Person = {
  // 각각의 인터페이스에 정의된 property들이 합쳐진 객체타입으로 정의
  name: "아메리카노",
  age: 1,
};

// 타입합치기 언제 사용될까 ?
// 1. 모듈보강
// 선언 병합은 이미 정의된 타입(특히 라이브러리 타입)에 새로운 속성이나 메소드를 추가하여 타입 정의를 확장할 때 유용하게 사용됩니다.
// 이를 모듈 보강이라고 합니다.
interface Lib {
  file_a: number;
  file_b: number;
}
interface Lib {
  myfile: string;
}
const lib: Lib = {
  file_a: 1,
  file_b: 2,
  myfile: "모듈보강",
};
