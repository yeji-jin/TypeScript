// 타입 추론
// 타입스크립트는 변수의 초기값으로 타입을 추론한다
// 범용적으로 변수를 사용할 수 있게 하도록 넓은타입으로 추론하는 과정 => 타입넓히기
let a = 10;
const func = (msg = "hello") => {
    return "10";
};
//초기값을 선언하지 않았을때 any타입 추론
let b; // 1.암묵적 any타입
b = 10; // 2. any -> number 진화
b.toFixed(); // number 타입으로 추론됨
// b.toUpperCase(); X
b = "hello"; // 근데 이건 됨 3. number -> string 진화
b.toUpperCase(); // string타입
// b.toFixed(); X
// 타입이 변신하듯이 바뀌는 상황을 any타입의 진화
// 명시적으로 any 타입을 정의하는것과 암묵적 정의와 동작이 다름 => 진화 X / O
// const는 number 리터럴값으로 추론됨
const num = 10;
const str = "hi hello";
export {};
