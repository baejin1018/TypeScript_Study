// const title = document.querySelector("#title");
// // title.innerHTML = "반가워요";//title 타입이 Element|null이여서 에러
// if (title != null) {
//   //narrowing 필요
//   title.innerHTML = "안녕하세요";
// }

// const title = document.querySelector("#title");
// if (title instanceof Element) {
//   title.innerHTML = "안녕하세요";
// }

// const title = document.querySelector("#title") as Element;
// title.innerHTML = "안녕하세요";

// const title = document.querySelector("#title");
// if (title?. innerHTML != undefined) {
//   title.innerHTML = "안녕하세요";
// }

// const link = document.querySelector(".link");
// if (link instanceof HTMLAnchorElement) {
//   link.href = "https://google.com";
// }

// const btn = document.querySelector('#btn');
// btn?.addEventListener('click',function(){

// })

const img = document.querySelector("#img");
if (img instanceof HTMLImageElement) {
  img.src = "바뀔사진주소";
}

const link = document.querySelectorAll(".naver");
link.forEach((l) => {
  if (l instanceof HTMLAnchorElement) {
    l.href = "google.com";
  }
});
