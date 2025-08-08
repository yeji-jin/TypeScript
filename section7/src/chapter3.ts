/**
 * 맵드타입
 * 맵드 타입은 객체 타입의 각 속성을 순회하며 새로운 속성 타입을 정의해서 전혀 다른 형태의 객체 타입을 효율적으로 생성해주는 기능
 * 인터페이스에서 사용 X
 * type으로 사용 O
 */

interface IUser {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  // [key in "id" | "name" | "age"]?: IUser[key];
  [key in keyof IUser]?: IUser[key];
};
type BooleanUser = {
  //IUser 타입 boolean으로 바꾸기
  [key in "id" | "name" | "age"]: boolean;
};
type readOnlyUser = {
  //IUser readonly로 바꾸기
  readonly [key in keyof IUser]: IUser[key];
};

//한명의 유저정보 불러오는 기능
const fetchUser = (): readOnlyUser => {
  return {
    id: 1,
    name: "name",
    age: 1,
  };
};

const updateUser = (user: PartialUser) => {
  //수정...
  console.log("수정완료", user); //수정완료 { id: 100, name: '홍길동' }
};
updateUser({
  id: 100,
  name: "홍길동",
});
