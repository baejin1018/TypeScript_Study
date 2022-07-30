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

## useState 타입지정

자신이 넣은 초기값을 바탕으로 자동 타입지정함

```ts
const [user, setUser] = useState("kim"); //string타입
const [user, setUser] = useState(["kim"]); //string[]타입
const [user, setUser] = useState<string | number>("kim"); //string|number 타입 가지게 됨
```

## type assertion

type assertion 할때 as 또는 <>를 쓰는데 리액트에서는 <>를 오해할수 있어 as 만 사용한다
