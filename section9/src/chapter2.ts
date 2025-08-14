/**
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface IPost {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//IPost 타입으로부터 title과 content만 있는 객체타입으로 새로운 정의
const legacyPost: Pick<IPost, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

//Pick 타입 직접구현
type Pick2<T, K extends keyof T> = {
  //K extends  "title" | "tags" | "content" | "thumbnailURL"
  //["title" | "content"] extends ["title" | "tags" | "content" | "thumbnailURL"]
  [key in K]: T[key];
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

//IPost 에서 title 제거
const noTitlePost: Omit<IPost, "title"> = {
  content: "",
  tags: [""],
  thumbnailURL: "",
};

//Pick 타입 직접구현
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = IPost, K = "title"
// Pick<IPost, Exclude<keyof IPost, "title">
// Pick<IPost, Exclude<"title" | "tags" | "content" | "thumbnailURL", "title">
// Pick<IPost, "tags" | "content" | "thumbnailURL">

/**
 * Record<V,K>
 * 키가 K 타입, 값이 V 타입인 객체를 정의할 때 유용
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

//Record 타입 직접구현
type Record2<K extends keyof any, V> = {
  [key in K]: V;
};
