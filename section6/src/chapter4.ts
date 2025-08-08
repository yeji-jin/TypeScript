/**
 * 제네릭 인터페이스와 제네릭 타입 별칭
 */

//1. 제네릭 인터페이스
// 타입으로 정의할때, <> 꺽쇠 함께 사용
// 타입변수
// = 타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터
interface IKeyPair<A, B> {
  key: A;
  value: B;
}
let keypair: IKeyPair<string, number> = {
  key: "key",
  value: 1,
};

let keypair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2", "3"],
};

// 인데스 시그니처 (basic)
interface INumberMap {
  [key: string]: number;
}
let numbermap: INumberMap = {
  key1: -999,
  key2: 123,
};

// 인데스 시그니처 (제네릭)
interface IMap<V> {
  [key: string]: V;
}
let strMap: IMap<string> = {
  key: "true",
};
let boolMap: IMap<boolean> = {
  key: true,
};

//2.제네릭 타입 별칭

type Map2<V> = {
  [key: string]: V;
};
let map2: Map2<string> = {
  key: "hihello",
};

// 제네릭 인터페이스의 활용 예시
/*
  ex) 유저관리 프로그램
  -> 유저구분 : 학생 유저 / 개발자 유저
*/

interface IStudent {
  type: "student";
  school: string;
}
interface IDeveloper {
  type: "developer";
  skill: string;
}
interface IUser<T> {
  name: string;
  profile: T;
}

const developer: IUser<IDeveloper> = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const student: IUser<IStudent> = {
  name: "홍학생",
  profile: {
    type: "student",
    school: "A대학교",
  },
};

const goToSchool = (user: IUser<IStudent>) => {
  const name = user.name;
  const school = user.profile.school;
  console.log(`${name}, ${school} 로 가는중...`);
};

goToSchool(student); //(O)
// goToSchool(developer); (X)
