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
console.log(book);
export {};
