/**
 * 타입스크립트의 클래스 - 접근제어자
 * access modifier
 * => public / private / protected
 */

class JobSeeker {
  //필드
  /*
    private name: string; -> 외부접근X, 파생클래스 접근X
    protected age: number; -> 외부접근X, 파생클래스 접근O
    position: string; 기본 public -> 외부접근O, 파생클래스 접근O
  */

  //생성자
  /*
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  */

  // constructor 매개변수에 선언시 필드에 중복선언필요 X / 값 초기화 자동화
  constructor(private name: string, protected age: number, public position: string) {
    // 값 초기화 자동화되어 쓰지 않아도 됨
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  //메서드
  work() {
    console.log(`My name is ${this.name}, I want to work as a ${this.position}`);
  }
}
const jobSeekerB = new JobSeeker("길동", 28, "개발자");
jobSeekerB.position = "ceo";
jobSeekerB.work();
// jobSeekerB.age = 1; (X) protected 외부접근불가X, 파생클래스 접근O

/**
 * 변경이 가능한 이유?
 class 내 필드 접근제어자 기본값(public)
 ---------------------------
  public name: string;
  public age: number;
  public position: string;
 */

// private 일 경우, 클래스 내에서만 엑세스 가능 (외부접근불가X, 파생클래스 접근X)
// jobSeekerB.name = "홍길동"; (X)
// console.log(jobSeekerB.name) (X)
class Employee extends JobSeeker {
  // ...
  //메서드
  func() {
    // console.log(this.name); (X) private으로 설정되어 있다면, 파생클래스 내에서도 접근불가
    console.log(this.age); // protected로 설정되어 있다면, 클래스/파생클래스 내에서만 접근가능
  }
}
let aaa = new Employee("이름", 10, "직업");

console.log(jobSeekerB); //{ name: '길동', age: 28, position: 'ceo' }
aaa.func(); //10
