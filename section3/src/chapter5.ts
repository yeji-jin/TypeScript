/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat;

const isDog = (animal: Animal): animal is Dog => {
  // animal is Dog (사용자 정의 타입 가드 user-defined type guard)
  //만약 함수의 반환값이 true를 리턴한다면, animal은 Dog타입이다. -> 추론가능
  return (animal as Dog).isBark !== undefined;
};
const isCat = (animal: Animal): animal is Cat => {
  // animal is Cat (사용자 정의 타입 가드 user-defined type guard)
  //만약 함수의 반환값이 true를 리턴한다면, animal은 Dog타입이다. -> 추론가능
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    animal; // 강아지
  } else if (isCat(animal)) {
    animal; // 고양이
  }
};
