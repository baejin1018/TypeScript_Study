// let 이름: string = "kim";
// // 이름 = 123; 타입이 달라 에러뜸
// let 나이: number = 50;
// // 나이= '한살'; number 타입이 아니여서 에러뜸

// let 글자들: string[] = ["kim", "park"];
// let 숫자들: number[] = [1, 2];
// //여러 타입 넣고 싶으면

// let 객체: { member1: string; member2: string } = {
//   member1: "mim",
//   member2: "park",
// };

// //일일히 다 타입 지정 할 필요 없다, 타입지정이 자동으로 되기 때문에

// // 문제 1 이름, 나이를 변수로 각각 저장해봅시다.
// const myName: string = "배진영";
// const age: number = 18;

// // 문제 2 이것을 타입 지정 하세요
// //let project = {
// //     member : ['kim', 'park'],
// //     days : 30,
// //     started : true,
// //   }

// let project: { member: string[]; days: number; started: boolean } = {
//   member: ["kim", "park"],
//   days: 30,
//   started: true,
// };

// const 회원들: (number | string)[] = [1, "2", 3];

// const 오브젝트: { a: string | number } = { a: "123" };

// // type Car = {
// //     color : boolean,
// //     model : boolean,
// //     price : boolean | number
// // }

// // type TypeChanger<MyType> = {
// //     [key in keyof MyType]:string
// // }

// // type changeType = TypeChanger<Car>

// function cleaning(x: (number | string)[]) {
//   const cleaned: number[] = [];
//   x.map((n) => {
//     if (typeof n === "string") {
//       cleaned.push(Number(n));
//     } else {
//       cleaned.push(n);
//     }
//   });
//   return cleaned;
// }

// console.log(cleaning(["1", 2, "3"]));

// type PositionX = { x: number };
// type PositionY = { y: number };
// type NewType = PositionX & PositionY;

// let position: NewType = { x: 10, y: 10 };
// console.log(typeof position);

type MyType = {
  color?: string;
  size: number;
  readonly position: number[];
};

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

const cutZero = (x: string): string => {
  const result = x.replace(/^0/, "");
  return result;
};
