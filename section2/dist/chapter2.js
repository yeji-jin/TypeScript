// 객체 타입간의 호환성
// ㄴ 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "구름이",
    color: "white",
    breed: "푸들",
};
animal = dog; // (O)
let book;
let programmingBookbook = {
    name: "타입스크립트 배우기",
    price: 33000,
    skill: "typescript",
};
book = programmingBookbook;
console.log(book); //{ name: '타입스크립트 배우기', price: 33000, skill: 'typescript' }
// programmingBookbook = book; (X)
// 초과 property 검사
// ㄴ 변수를 초기화 할 때, 초기화하는 값으로 객체 리터럴을 사용할때 발동하는 검사
let book2 = {
    name: "타입스크립트 배우기",
    price: 33000,
    // skill: "typescript", (X)
};
const bookFunc = (book) => { };
bookFunc({
    name: "타입스크립트 배우기",
    price: 33000,
    // skill: "typescript", (X)
});
// 초과 property 검사를 피하려면 ?
// ㄴ 변수에 저장해두었다가 할당
let book3 = programmingBookbook;
bookFunc(programmingBookbook);
console.log(book3); //{ name: '타입스크립트 배우기', price: 33000, skill: 'typescript' }
export {};
