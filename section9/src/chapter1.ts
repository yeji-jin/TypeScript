/**
 * 유틸리티 타입 소개
 * 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은것
 * TypeScript 유틸리티 타입의 주된 목적은?
 * 유틸리티 타입은 복잡한 타입 로직을 미리 정의하여 타입 코드의 재활용성을 높이고 정의를 간결하게 만들어줌
 */

/**
 * Partial<T>
 * -> 부분적인/일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface IPost {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//Partial<>
//타입변수로 전달한 타입에 모든 프로퍼티를 선택적 프로퍼티로 만드는 유틸리티 타입
const draft: Partial<IPost> = {
  title: "제목",
  content: "입력중",
};
//Partial 타입 직접구현
type Partial2<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 * -> 필수의,필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입
 */

const withThumbnailPost: Required<IPost> = {
  title: "title",
  tags: ["tag1"],
  content: "content~~",
  thumbnailURL: "url~~",
};
//Required 타입 직접구현
type Required2<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<IPost> = {
  title: "보호된 게시글-999",
  tags: ["보호된 게시글-999"],
  content: "보호된 게시글",
  thumbnailURL: "보호된 게시글-url~~",
};
//Readonly 타입 직접구현
type Readonly2<T> = {
  readonly [key in keyof T]: T[key];
};
