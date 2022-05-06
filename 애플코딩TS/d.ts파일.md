# .d.ts 파일

- 타입정의만 따로 저장해놓고 import 해서 쓰기위한 파일

- 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용

.d.ts 파일안에는 타입정의만 넣을 수 있다  
.d.ts 파일은 ambient module(글로벌모듈)이 되지 않아 export 를 추가해 야지 다른파일에서 쓸수 있다

### d.ts 파일 레퍼런스용으로 쓰기

tsconfig.json에

```ts
        "declaration": true;
```

이걸 추가해주면 ts파일마다 d.ts파일이 자동생성 되어서 타입정의만 저장해준다

### d.ts 파일 글로벌 모듈 만들기

ts config.json에

```ts
"typeRoots": ["./types"]
```

이걸 추가해주면 ts파일 작성시 타입이 없으면 자동으로 설정한 경로의 파일에서 타입을 찾아 적용해준다
