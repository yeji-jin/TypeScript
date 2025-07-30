// ----- 04. 타입스크립트의 타입 - 객체 (객체리터럴 타입)
// 구조를 기준으로 타입정의 (구조적 타입 시스템 -> property)
let user: {
  id?: number; // 선택적 property / optional property (?)
  name: string;
} = {
  id: 1,
  name: "홍길동",
};
user = {
  // id는 선택적 opt
  name: "김길동",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "구름이",
  color: "white",
};

//readonly -> property의 값의 수정을 막음
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};
