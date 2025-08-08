/**
 * 타입 조작하기
 */

//타입 조작 방법
//1. 제네릭
//2. 인덱스드 엑세스 타입 - 객체,배열,튜플 타입에서 특정 property or 요소의 타입을 추출하는 타입
//3. keyof 연산자 - 특정 객체 타입으로부터 property key들을 모두 스트링리터럴 유니온 타입으로 추출하는 연산자
//4. Mapped 타입 - 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
//5. 템플릿 리터럴 타입 - 기존의 스트링리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
//6. 조건부 타입

/**
 * 인덱스드 엑세스 타입
 */
//case1. interface
interface IPost {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

let key = "author"; // 변수(=값)
// author: IPost[key] (X)
// 인덱스는 타입만 명시가능  IPost["author"]
// 만약 특정 property만 가져오고 싶다면? -> IPost["author"]["id"] (중첩대괄호)

const printAuthorInfo = (author: IPost["author"]) => {
  console.log(`${author.name} - id:${author.id}, age:${author.age}`); //홍길동 - id:1, age:20
};

const post: IPost = {
  title: "제목",
  content: "컨텐츠",
  author: {
    id: 1,
    name: "홍길동",
    age: 20,
  },
};

printAuthorInfo(post.author);

//case2. 배열타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const printAuthorInfo2 = (author: PostList[number]["author"]) => {
  //PostList[number] -> 배열 안의 한 개 게시물 객체 타입
  console.log(`${author.name} - id:${author.id}, age:${author.age}`); //홍길동 - id:1, age:20
};

const postList: PostList[number] = {
  //배열 안에 들어있는 요소 하나의 타입만 꺼내 쓰기 위해
  title: "제목",
  content: "컨텐츠",
  author: {
    id: 1,
    name: "홍길동",
    age: 20,
  },
};
const postList2: PostList = [
  {
    title: "제목1",
    content: "내용1",
    author: { id: 1, name: "홍길동", age: 20 },
  },
  {
    title: "제목2",
    content: "내용2",
    author: { id: 2, name: "이몽룡", age: 22 },
  },
];

printAuthorInfo2(postList.author); //홍길동 - id:1, age:20,
postList2.forEach((post) => printAuthorInfo2(post.author)); //홍길동 - id:1, age:20, 이몽룡 - id:2, age:22

//case3. 튜플타입
type Tub = [number, string, boolean];

type Tub0 = Tub[0]; //number
type Tub1 = Tub[1]; //string
type Tub2 = Tub[2]; //boolean
type TubNum = Tub[number]; // string | number | boolean
