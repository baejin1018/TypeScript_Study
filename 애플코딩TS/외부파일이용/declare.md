# declare

다른파일에 있던 변수를 쓸때 에러나지 않도록 재정의 할떄 사용

```ts
declare const a: number;
```

# anbient module 글로벌 모듈

ts 파일끼리는 import하지 않아도 다른 ts 파일에 있는 변수를 사용 할 수 있다(글로벌모듈)  
다른 파일이 import 하지 않고 변수를 사용하지 못하게 할려면

```ts
export {};
```

이거 하나 넣어주면 저걸 넣은 파일은 더이상 글로벌 모듈이 아니다

## declare global

로컬모듈에서 전역변수 만들고 싶을때 사용  
export{}를 넣어 로컬모듈을 만들었지만 그 안에서 전역변수를 만들고 싶으면

```ts
declare global {
  type Dog = string;
}
```

이런식으로 써주면 declare global안에 있는 것들은 모든 파일에서 이용 가능하다
