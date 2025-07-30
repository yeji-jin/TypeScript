// ----- 05. 타입 별칭
// #주의할점 : 같은스코프 내에서 중복선언 X
type User = {
  id?: number; // 선택적 property / optional property (?)
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
const func = () => {
  type User = {
    name: string;
  };
  let user3: User = {
    name: "김길동",
  };
};
let user: User = {
  id: 1,
  name: "홍길동",
  nickname: "길똥",
  birth: "1920.02.02",
  bio: "hi hello",
  location: "한양",
};
let user2: User = {
  id: 2,
  name: "박길동",
  nickname: "박똥",
  birth: "1910.02.02",
  bio: "hi hello",
  location: "한양",
};

// ----- 06. 인덱스 시그니처
type CountryCodes = {
  // [key] : value
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// #주의할점 : 인덱스 시그니처는 규칙을 위반하지만 않으면 모두 허용 (빈객체도 허용)
// 반드시 있어야할 property 있다면 선언

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 있어야할 property (value type 일치시키기)
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKingdom: 826,
};
