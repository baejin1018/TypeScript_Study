# object index signatures

object 타입 지정 한번에 할때 사용

```ts
interface StringOnly {
  [key: string]: string;
}

const user: StringOnly = {
  name: "kim",
  live: "seoul",
};
```

key값이 string인 key의 value는 모두 string 타입이다
