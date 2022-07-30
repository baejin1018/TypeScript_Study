# 조건문으로 타입 만들기

삼항연산자를 이용

```ts
type Age<T> = T extends string ? T : unknown;
//타입파라미터로 string이 들어오면 string 아니면 unkown
const a: Age<string>;
```

#### 문제 1 답

```ts
type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>; //agr 1 타입 :string
let age2: FirstItem<number[]>;//age2 타입 : number
```

# infer

타입을 왼쪽에서 추출 해준다

```ts
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
//왼쪽에서 뽑아온 타입을 R에 넣어주세요
type a: 타입추출<string[]>;
```
