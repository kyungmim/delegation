const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

const navigation = getNode(".navigation");
// const list = getNodes('.navigation li');
const visualImage = getNode(".visual img");

// function handleSlide(e) {
//   e.preventDefault();

//   const target = e.target.closest("li");
//   const a = e.target.closest("a");

//   const list = [...navigation.children];

//   if (!target | !a) return;

//   const index = target.dataset.index;

//   attr(visualImage, "src", a.href);
//   attr(visualImage, "alt", data[index - 1].alt);

//   list.forEach((li) => removeClass(li, "is-active"));

//   addClass(target, "is-active");
// }

navigation.addEventListener("click", handleSlide);

//이미지 자체에 접근하기.
function handleSlide(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const img = e.target.closest("img");

  const list = [...navigation.children];

  if (!target | !img) return;

  const index = target.dataset.index;

  // attr(visualImage, "src", `./assets/part01/${data[index - 1].src}`);
  // attr(visualImage, "alt", data[index - 1].alt);

  visualImage.setAttribute("src", `./assets/part01/${data[index - 1].src}`);
  visualImage.setAttribute("alt", data[index - 1].alt);

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");
}

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
