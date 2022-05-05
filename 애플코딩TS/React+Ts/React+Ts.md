# React+Ts

### 리액트 + Ts 프로젝트 만드는법

`npx create-react-app 프로젝트명 --template typescript`

## 주의할점

- js 파일은 ts, jsx파일은 tsx 로 사용
- 타입스크립트를 사용하니 타입지정 잘 해줘야함
- jsx타입지정은 `JSX.Elemnt`  
  Ex

```ts
const box: JSX.Elemnt = <div></div>;
```

더 정확하게 지정하는법

```ts
const box: JSX.IntrinsicElements["div"] = <div></div>;
```

## 컴포넌트 타입지정

함수타입지정처럼 하면됨  
하지만 HTML 요소를 return 하기 때문에 JSX.Elemnt 타입으로 지정

```ts
const Profile = (): JSX.Element => {
  return <div>프로필</div>;
};

export default Profile;
```

## 프롭스 타입지정

프롭스는 함수 파라미터 처럼 타입을 지정하면 된다

```ts
const Profile = (props: { name: string }): JSX.Element => {
  return <div>프로필 {props.name}</div>;
};
```
