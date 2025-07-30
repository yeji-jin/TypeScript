// ----- 07. Enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
/*
  console.log(user1, user2, user3);
  { name: '김아무개', role: 0 } { name: '이아무개', role: 10 } { name: '박아무개', role: 11 }
*/
/*
enum Role {
  ADMIN = 10,
  USER,
  GUEST,
}
console.log(user1, user2, user3);
=> { name: '김아무개', role: 10 } { name: '이아무개', role: 11 } { name: '박아무개', role: 12 }
*/
/*
enum Role {
  ADMIN,
  USER,
  GUEST,
}
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
console.log(user1, user2, user3);
=> { name: '김아무개', role: 0 } { name: '이아무개', role: 1 } { name: '박아무개', role: 2 }
*/
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "김아무개",
    role: Role.ADMIN, // 관리자
    language: Language.korean,
};
const user2 = {
    name: "이아무개",
    role: Role.USER, // 유저
    language: Language.english,
};
const user3 = {
    name: "박아무개",
    role: Role.GUEST, // 게스트
};
console.log(user1, user2, user3);
export {};
