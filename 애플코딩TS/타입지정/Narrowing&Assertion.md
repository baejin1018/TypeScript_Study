# Narrowing & Assertion

## Narrowing

함수 내부로 들어온 인자에 대한 Type검사를 통해 조건을 좁혀서 특정 행동을 하게 하는 것  
대표적인 Narrowing방법은 `typeof 연산자`  
Ex

```ts
function f(x:number :number|string){

    let array : number[] = [];
    if(typeof x === 'number'){
        array[0]= x;
    }
}
```

### && 연산자로 null&undefined 타입 체크

```ts
function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}
```

### in 키워드로 object narrowing

in : `속성명 in 오브젝트자료`  
속성명이 오브젝트 자료에 있나 없나 검사

```ts
type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    //Fish 타입인지 검사,swim이 animal 안에 들어 있나
  }
}
```

### instanceof 연산자로 objectnarrowing 가능
instanceof는 new로 생성된 object들의 부모를 검사할수 있다 그것을 이용해 narrowing   
```ts
let 날짜 new Date();
if(날짜 instanceof Date){
  
}
```
## Assertion (타입 덮어쓰기)

as 사용  
assertion 문법의 용도

- Narrowing 할때 쓴다
- 무슨 타입이 들어올지 100% 확실할 때 쓴다

```ts
function f(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; //as 왼쪽에 있는 x의 타입을 number로 덮는다
}
```

#### 문제 1

숫자여러개를 array 자료에 저장해놨는데

가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

이걸 클리닝해주는 함수가 필요합니다.

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

##### 답

```ts
function cleaning(x: (number | string)[]) {
  const cleaned: number[] = [];
  x.map((n) => {
    if (typeof n === "string") {
      cleaned.push(Number(n));
    } else {
      cleaned.push(n);
    }
  });
  return cleaned;
}

console.log(cleaning(["1", 2, "3"]));
```
