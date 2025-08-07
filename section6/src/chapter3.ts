/**
 * map, forEach 메서드 타입 정의하기
 */

//1. map
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2); // [2,4,6]

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  console.log(result);
  return result;
}

map(arr, (item) => item * 2); //[ 2, 4, 6 ]
map(["a", "b", "c"], (item) => item.toUpperCase()); //[ 'A', 'B', 'C' ]

//2.forEach

const arr2 = [1, 2, 3];
function funcForeach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
funcForeach(arr2, (item) => {
  // item number type 추론
  console.log(item.toFixed());
});
funcForeach(["123456"], (item) => {
  // item string type 추론
  console.log(item.toLowerCase());
});
