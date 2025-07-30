// 타입계층도와 함께 기본타입간의 호환성 살펴보기

/*
 1. unknown 타입 (타입스크립트의 모든 타입들의 "슈퍼타입") - "전체집합"
 */
const unknownExam = () => {
  // unknown은 모든 값을 넣을 수 있음 (업캐스팅)
  let a: unknown = 1;
  let b: unknown = "1";
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;
  let f: unknown = [];
  let g: unknown = {};

  // 다운 캐스팅 불가
  let unknownVar: unknown;
  // let num:number = unknownVar; (X)
  // let str:string = unknownVar; (X)
  // let bool:boolean = unknownVar; (X)
};

/*
 2. never 타입 (타입 계층 중 가장 하단에 위치) - 모든 타입의 서브타입 - "공집합" "값반환불가능"
 */
const neverExam = () => {
  const neverFunc = (): never => {
    while (true) {}
  };

  // 업캐스팅 가능 (할당가능)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let boolean: boolean = neverFunc();
  let voidVar: void = neverFunc();

  // 다운캐스팅 불가
  // let never1:never = 1; (X)
  // let never2:never = "one"; (X)
  // let never2:boolean = true; (X)
  // => never 타입은 "어떤값도 저장되어서는 안되는 변수" 에 활용하면 good!
};

/*
 3. void 타입 (반환값이 없는경우/return이 없는 경우 명시)
 */
const voidExam = () => {
  const voidFunc = (): void => {
    console.log("hi void");
    return undefined; // undefined를 반환해도 업캐스팅이기 떄문에 문제 X
  };

  let voidVar: void = undefined; //업캐스팅
};

/*
 4. any 타입 - (치트키 / 타입계층도 무시) 
 ㄴ 모든 타입의 슈퍼타입으로 위치
 ㄴ 모든 타입의 서브타입으로 위치 (*never 제외)
 */
const anyExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // (O) unknown 타입이 any타입으로 다운캐스팅됨
  undefinedVar = anyVar; // (O) any 타입이 undefined타입으로 다운캐스팅됨
  // neverVar = anyVar; (X) never타입까지 다운캐스팅 불가
};
