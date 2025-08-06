/**
 * 타입스크립트의 클래스
 * TypeScript에서 클래스는 객체 생성자일 뿐만 아니라, 그 자체로 타입으로 활용
 * 이는 코드에서 변수나 함수 인자의 타입을 명확히 하여 안정성을 높여줍니다.
 */

class JobSeeker {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log(`I want to work as a ${this.position}`);
  }
}

const jobSeekerB = new JobSeeker("길동", 28, "개발자"); // 타입스크립트의 클래스는 실제 타입으로도 활용됨
jobSeekerB.work();

// 타입스크립트의 클래스는 실제 타입으로도 활용됨
const jobSeekerC: JobSeeker = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

class Employee extends JobSeeker {
  //필드
  officeNum: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNum: number) {
    super(name, age, position); // 파생클래스 -> ts에서는 super 필수
    this.officeNum = officeNum;
  }
}
