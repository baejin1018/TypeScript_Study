# implements 키워드

클래스가 특정 interface의 조건을 만족하는지 체크하기 위해 사용

```ts
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
}
let 자동차 = new Car();
```

이렇게 class 이름 우측에 implements를 쓰고 interface 이름을쓰면 이 class에 이 interface에 있는 속성을 다 들고 있는 지 확인 후 안 가지고있을시 에러 발생 시켜줌
