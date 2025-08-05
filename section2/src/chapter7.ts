/**
 * 서로소 유니온 타입
 * 교칩합이 없는 타입들로만 만든 유니온 타입
 */

import { error } from "console";

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

// tag(리터럴)선언 => 서로 아무런 교집합이 없는 서로소 집합의 관계로 바뀜
type User = Admin | Member | Guest; // 서로소 유니온타입

//Admin -> ${name}님 현재까지 ${kickCount}명 강퇴하셨습니다.
//Member -> ${name}님의 현재 포인트는 ${point}입니다.
//Guest -> ${name}님 현재까지 ${visitCount}번 방문하셨습니다.
const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재 포인트는 ${user.point}입니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
      break;
    }
  }
};

/**
 * 비동기 작업의 결과를 처리하는 객체
 */

//서로소 유니온타입으로 분리
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: "오류 발생";
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// loading -> loading
// failed -> failed && msg
// success -> data
const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("loading");
      break;
    }
    case "FAILED": {
      console.log(`failed - ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`success - ${task.response.data}`);
      break;
    }
  }
};
