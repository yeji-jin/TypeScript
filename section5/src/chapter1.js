/**
 * 자바스크립트의 클래스
 * 객체 지향 프로그래밍에서 '클래스'는?
 * 클래스는 동일한 속성과 기능을 가진 여러 객체를 생성할 때 사용하는 '틀' 또는 '설계도' 역할을 합니다. 객체 리터럴의 코드 중복 문제를 해결해줘요.
 */

class Student {
  //필드
  name;
  age;
  grade;

  //생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //메서드
  study() {
    console.log(`study ${this.grade}`);
  }
  introduce() {
    console.log(`hi ${this.name}`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("스뿡지밥", 15, "B");
console.log(studentB); //Student { name: '스뿡지밥', age: 15, grade: 'B' }
studentB.study(); //study B
studentB.introduce(); //hi 스뿡지밥

class StudentDeveloper extends Student {
  //필드
  skill;

  //생성자
  constructor(name, age, grade, skill) {
    super(name, age, grade);
    this.skill = skill;
  }

  //메서드
  programming() {
    console.log(this.skill);
  }
}

let studentDeveloper = new StudentDeveloper("뿡뿡이", 27, "A", "Javascript");
console.log(studentDeveloper);
/*
StudentDeveloper {
  name: '뿡뿡이',
  age: 27,
  grade: 'A',
  skill: 'Javascript'
}
 */
studentDeveloper.programming(); //Javascript
