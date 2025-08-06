/**
 * 인터페이스 확장하기
 * 인터페이스 확장은 다른 인터페이스의 속성을 물려받아 새로운 인터페이스를 정의할 수 있게 해줍니다.
 * 이를 통해 여러 관련 타입에서 공통된 속성을 반복해서 정의할 필요가 없어집니다.
 */

interface IAnimal {
  name: string;
  age: number;
}

interface IDog extends IAnimal {
  name: "구름이";
  // 상속 받는 인터페이스에서 동일한 property 재정의 가능 *(원본타입의 서브타입만 재정의 가능)
  // (원본)string타입 > string 리터럴타입
  isBark: boolean;
}

const dog: IDog = {
  // name: "길동이", //(X)
  name: "구름이", //(O)
  age: 1,
  isBark: false,
};

interface ICat extends IAnimal {
  isScratch: boolean;
}
interface IChicken extends IAnimal {
  isFly: boolean;
}

interface ICatChicken extends ICat, IChicken {}
const catChicken: ICatChicken = {
  name: "",
  age: 10,
  isScratch: true,
  isFly: true,
};
