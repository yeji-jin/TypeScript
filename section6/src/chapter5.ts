/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3, 5]);
numberList.pop();
numberList.push(4);
numberList.print(); //[ 1, 2, 3, 4 ]

const stringList = new List(["A", "B", "C"]);
stringList.pop();
stringList.push("D");
stringList.print(); //[ 'A', 'B', 'D' ]
