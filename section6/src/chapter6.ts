/**
 * 프로미스와 제네릭
 */

//1. 프로미스는 타입변수로 비동기처리의 결과값(resolve)의 타입을 정의 할 수 있지만,
//2. reject(실패)의 경우, 타입은 정의 할 수 없다.
//3. 프로미스는 resolve 결과값을 자동으로 추론X (unknown으로 추론함)

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});
promise.then((response) => {
  console.log(response * 10); //20
});

const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~땜시 실패");
  }, 3000);
});
promise2.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입 정의
 */

interface IPost {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<IPost> {
  return new Promise<IPost>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글1",
        content: "게시글1 컨텐츠",
      });
    }, 1000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});

/*
방법1. (함수의 선언부분만 보고도 파악가능하기 떄문에 가독성 더 좋음)
function fetchPost(): Promise<IPost> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글1",
        content: "게시글1 컨텐츠",
      });
    }, 1000);
  });
}

방법2. 
function fetchPost(){
  return new Promise<IPost>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글1",
        content: "게시글1 컨텐츠",
      });
    }, 1000);
  });
}
*/

// `Promise<T>`에서 `<T>`는 Promise가 성공적으로 완료되었을 때 `.then()` 메서드로 넘겨받을 값의 타입을 명확히 정의
// 이를 통해 비동기 결과의 타입 안전성을 확보
