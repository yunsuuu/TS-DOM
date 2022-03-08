let title = document.querySelector("#title");

// HTML 조작시 narrowing 방법 (type 명확하게 하기)
// 1) if문
// if(title !== null){
//   title.innerHTML = "반가워요!";
// }

// 2) instanceof 연산자 (가장 많이 사용)
// if(title instanceof Element){ 
  // title = obj, element = class명
  // title이 element의 자식인가 확인(맞으면 true 반환)
//   title.innerHTML = "반가워요!";
// }

// 3) as type - as 좌측 부분을 Element 타입으로 간주
// let title = document.querySelector("#title") as Element;
// title.innerHTML = "반가워요!";

// 4) optional chaining - 오브젝트에 붙이는 ?.
// if(title?.innerHTML){
//   title.innerHTML = "반가워요!";
// }
// title에 innerHTML이 있으면 출력, 없으면 undefined 반환

let link = document.querySelector(".link");
if(link instanceof HTMLAnchorElement){
  // 단순히 link instanceof Element로 하면 에러 발생
  // HTMLAnchorElement 타입 - href, style, class 사용 가능 
  link.href = "https://kakao.com";
}
// <button> 태그면 HTMLButtonElement, <h1> 태그면 HTMLHeadingElement

// 실습1 - 버튼 클릭시 이미지 변경
let btn = document.querySelector("#button");
btn?.addEventListener("click", function(){
  let img = document.querySelector("#img");
  if(img instanceof HTMLImageElement){
    img.src = "img/캐롤 (2).jpg"
  }
})

let youtube = document.querySelectorAll(".naver");
youtube.forEach((el) => {
  if(el instanceof HTMLAnchorElement){
    el.href = "https://www.youtube.com/";
  }
})