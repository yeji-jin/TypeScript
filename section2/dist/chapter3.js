// 대수타입
// ㄴ 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// ㄴ 합집합 타입과 교집합 타입이 존재
/**
 * 1. 합집합 타입 - Union 타입
 */
let a; //string number union 타입
a = 1;
a = "1";
// 배열을 이용한 유니언타입
let arr = [1, "1", true];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
// 합집합 X
// let union4: Union1 = { (X)
//   name: "",
// };
/**

 |-------------------|    <-- 합집합(포함)  -->    |--------------------|
 |  type Dog<union1> |        <union3>          | type Person<union2>|
 |-------------------|    <-- 합집합(포함)  -->    |--------------------|
     {name, color}      {name, color,language}     {name,language}
  
*/
/**
 * 2. 교집합 타입 - Intersection 타입
 ㄴ 객체 타입의 교집합은 공통된 프로퍼티를 갖는 값이 아닌, 두 객체 타입에 공통으로 포함될 수 있는 값을 의미
 */
let abc; // number과 string타입의 교집합타입 ? 공집합 => never (불가능)
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
/*
  🔹 Dog & Person → 교집합 타입 (Intersection)
    두 타입 모두 만족해야 함 =>  name, color, language 모두 있어야함

    let a: Dog & Person = {
      name: "",      // 둘 다에 있음
      color: "",     // Dog에만 있음
      language: "",  // Person에만 있음
    }
  ✅ 이렇게 되면 Dog도 되고, Person도 되는 "교집합 객체" 가 돼

  🔹 Dog | Person → 합집합 타입 (Union)
    둘 중 하나만 만족하면 됨 => Dog만 만족해도 OK

    let a: Dog | Person = {
      name: "",
      color: "", // Dog에만 있음
    }
  ✅ 이건 Dog 타입으로 간주되니까 통과

    ❗ 그런데 아래처럼 쓰면?
    let union3: Dog | Person = {
      name: "",
      color: "",
      language: "",
    };
      
    이건 엄밀히 말하면 Dog도 아니고 Person도 아님.
    그런데도 타입스크립트가 이걸 통과시켜주는 이유는?
    이 객체가 Dog로도 될 수 있고, Person으로도 될 수 있다고 판단하는 느슨한 검사 때문
    즉, 초과 속성 검사(Excess Property Check) 가 안 작동할 때는 이런 걸 통과
 */
