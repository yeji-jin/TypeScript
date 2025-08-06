/**
 * 인터페이스와 클래스
 */

interface ICharacter {
  // 인터페이스는 무조건! public 필드만 정의 가능!!
  name: string;
  moveSpeed: number;
  move(): void;
}

// class Character 가 ICharacter를 구현
class Character implements ICharacter {
  // 인터페이스는 무조건! public 필드만 정의 가능!! -> private /  protected (X)
  // private /  protected 필드가 필요하다면?
  // 인터페이스 정의 X , 따로정의 -> private extra: string
  constructor(public name: string, public moveSpeed: number, private extra: string) {}

  move() {
    console.log(`${this.moveSpeed}만큼 이동`);
  }
}
