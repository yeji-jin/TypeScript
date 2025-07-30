// ----- 01. 타입스크립트의 타입 - 원시타입
// 1-1. number
let num1: number = 123;
let num2: number = -123;
let num3: number = -0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num6: number = NaN;

// 1-2. string
let str1: string = "hi";
let str2: string = `hi ${num1}`;

// 1-3. boolean
let bool1: boolean = true;
let bool2: boolean = false;

// 1-4. null
let null1: null = null;

// 1-5. undefined
let undefined1: undefined = undefined;

// @strictNullChecks
let a: number = null;

// ----- 02. 타입스크립트의 타입 - 리터럴 타입
//리터럴 -> 값 (값으로 만든 타입)
let num10: 10 = 10; //변수의 타입을 값 자체로 지정
let jyj: "jyj" = "jyj";
let onlyTrue: true = true;
