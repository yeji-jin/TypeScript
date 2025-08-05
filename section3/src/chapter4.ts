/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * 오버로딩 = 같은 이름, 다른 입력 → 다르게 처리하는 함수
 * 입력 타입이 다르면 다른 방식으로 동작하는 함수
 */

// 버전들 -> 오버로드 시그니처들 (겉모습만 정의)
// 함수의 구현부 없이 선언식만 써둔것 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처 (하나만!)
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}

// func(); (X)
func(1);
// func(1,2); (X)
func(1, 2, 3);

// ------------
// 실무에서 오버로딩을 쓰는 이유
// 여러 타입을 받을 수 있지만, 내부 처리 로직은 하나로 통일
// 클라이언트 라이브러리나 유틸 함수 만들 때 유용함
// 함수 사용자가 정확한 타입 힌트를 받을 수 있음 → 코드 자동완성과 안정성 ↑

//예제 1 : 날짜 포맷 함수
function formatDate(date: Date): string;
function formatDate(timestamp: number): string;

function formatDate(value: Date | number): string {
  const d = typeof value === "number" ? new Date(value) : value;
  return d.toISOString().slice(0, 10); // yyyy-mm-dd
}

// 사용
formatDate(new Date()); // "2025-08-05"
formatDate(Date.now()); // "2025-08-05"

// 예제2 : 유저 정보를 가져오는 함수
// 1. 오버로드 시그니처 정의
function getUserInfo(id: number): { id: number; name: string };
function getUserInfo(name: string): { id: number; name: string };

// 2. 실제 구현
function getUserInfo(param: number | string): { id: number; name: string } {
  if (typeof param === "number") {
    // ID로 검색
    return { id: param, name: "User" + param };
  } else {
    // 이름으로 검색 (실제로는 DB 쿼리 등)
    return { id: 999, name: param };
  }
}

// 사용 예
const user1 = getUserInfo(1); // { id: 1, name: "User1" }
const user2 = getUserInfo("Yeji"); // { id: 999, name: "Yeji" }

// 화살표 함수 오버로딩
// 화살표 함수로 오버로딩을 사용할 때는 함수 시그니처를 미리 정의한 후, 실제 구현부에서 매개변수에 맞는 로직을 처리
/*
  // 오버로딩 시그니처 정의
  const func: {
    (a: number): void;
    (a: number, b: number): void;
    (a: number, b: number, c: number): void;
  } = (a: number, b?: number, c?: number) => {
    if (typeof b === "number" && typeof c === "number") {
      console.log(`Three arguments: ${a}, ${b}, ${c}`);
    } else if (typeof b === "number") {
      console.log(`Two arguments: ${a}, ${b}`);
    } else {
      console.log(`One argument: ${a}`);
    }
  };

  // 사용 예
  func(1);           // One argument: 1
  func(1, 2);        // Two arguments: 1, 2
  func(1, 2, 3);     // Three arguments: 1, 2, 3
 
  ====================

  ✅ 일반 함수에서는
  **오버로딩 시그니처(선언)**와
  **구현부(실제 함수)**를 따로 쓸 수 있음

  // 오버로딩 시그니처
  function func(a: number): void;
  function func(a: string): void;

  // 구현부 (딱 하나만!)
  function func(a: number | string) {
    console.log(a);
  }

  ❌ 화살표 함수에서는 오버로딩 시그니처를 따로 쓸 수 없음.
  화살표 함수 자체에는 이름이 없어서,
  타입을 따로 정의해주고 변수에 할당하는 방식으로 처리

  // 1. 먼저 타입 정의
  type Func = {
    (a: number): void;
    (a: string): void;
  };

  // 2. 타입에 맞게 구현 (하나만!)
  const func: Func = (a: number | string) => {
    console.log(a);
  };

  type Func = {
    (a: number): void;
    (a: number, b: number): void;
    (a: number, b: number, c: number): void;
  };

  const func: Func = (a: number, b?: number, c?: number) => {
    if (typeof b === "number" && typeof c === "number") {
      console.log(`Three arguments: ${a}, ${b}, ${c}`);
    } else if (typeof b === "number") {
      console.log(`Two arguments: ${a}, ${b}`);
    } else {
      console.log(`One argument: ${a}`);
    }
  };
 */
