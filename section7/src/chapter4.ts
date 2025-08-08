/**
 * 템플릿 리터럴 타입
 * 템플릿 리터럴 타입은 자바스크립트의 템플릿 리터럴 구문처럼 백틱을 사용해 여러 타입들을 조합한 새로운 문자열 리터럴 유니온 타입을 자동으로 생성
 */

type Color = "red" | "orange" | "blue";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color} - ${Animal}`;
//"red - dog" | "red - cat" | "red - chicken" |
//"orange - dog" | "orange - cat" | "orange - chicken" |
//"blue - dog" | "blue - cat" | "blue - chicken"
