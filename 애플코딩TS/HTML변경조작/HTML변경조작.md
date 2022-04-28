# HTML 변경 조작

```ts
const title = document.querySelector("#title");
  title.innerHTML = "안녕하세요";
}
```

그냥 이렇게 쓰면 title 타입이 Element|null이여서 에러가 발생한다  
따라서 narrowing이 필요하다

방법1

```ts
const title = document.querySelector("#title");
if (title != null) {
  title.innerHTML = "안녕하세요";
}
```

방법2

```ts
const title = document.querySelector("#title");
if (title instanceof Element) {
  title.innerHTML = "안녕하세요";
}
```

방법3

```ts
const title = document.querySelector("#title") as Element;
title.innerHTML = "안녕하세요";
```

방법4

```ts
const title = document.querySelector("#title");
if (title?.innerHTML != undefined) {
  title.innerHTML = "안녕하세요";
}
```

## <a> 태그의 href 속성 바꾸기

```ts
const link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://google.com";
}
```

href 를 바꿀때는 Element가 아닌 HTMLAnchorElement를 사용했다
타입스크립트에는 Element안에 HTMLButtonEement, HTMLAnchorElement,HTMLHeadingElement,등의 HTML 타입이 있다  
따라서 무조건 Element 타입이 아닌쓰는 HTML 태그에 따라 타입을 지정해야한다

## eventListner 부착하기

```ts
const btn = document.querySelector("#btn");
btn?.addEventListener("click", function () {});
```

## 이미지 변경하기

```TS
const img = document.querySelector("#img");
if (img instanceof HTMLImageElement) {
  img.src = "바뀔사진주소";
}
```

## 여러개 변경하기

```TS
const link = document.querySelectorAll(".naver");
link.forEach((l) => {
  if (l instanceof HTMLAnchorElement) {
    l.href = "google.com";
  }
});
```
