// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

const contents = getNode(".contents");
const textField = getNode("#comment37");

function createComment(user, value) {
  return /*html*/ `
  <div class="id" data-id = "${Date.now()}">
    <div class="profile_img border_over">
      <img src="./assets/part03/tiger.png" alt="프로필사진">
    </div>
    <div class="comment_field">
      <div class="text_container">
        <div class="name"><a href="#">${user}</a></div>
        <div class="text_field">${value}</div>
      </div>
    </div>
  </div>
`;
}

function handleContents(e) {
  e.preventDefault();

  let target = e.target;

  let name = attr(target, "data-name");

  while (!attr(target, "data-name")) {
    target = target.parentNode;
    name = attr(target, "data-name");

    if (target.tagName === "BODY") {
      target = null;
      return;
    }
  }

  console.log(name);

  if (name === "like") {
    toggleClass(target, "active");
  }

  if (name === "comment") {
    textField.focus();
  }

  if (name === "more") {
    toggleClass(target, "active");
  }

  if (name === "send") {
    let value = textField.value;

    const comment_container = getNode(".comment_container");

    insertLast(comment_container, createComment("심선범", value));
    comment_container.scrollTop = comment_container.scrollHeight;
    textField.value = "";
  }
}

contents.addEventListener("click", handleContents);

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

// const content = getNode('.contents');
// const textField = getNode('#comment37');
// const commentContainer = getNode('.comment_container');

// function handleClick(e){
//   e.preventDefault();
//   let target = e.target;

//   while(!target.getAttribute('data-name')){
//     target = target.parentElement;

//     if(target.tagName === 'BODY'){
//       target = null;
//       return;
//     }
//   }

//   if(target.dataset.name === 'like'){
//     target.classList.toggle('active');
//   }

//   if(target.dataset.name === 'comment'){
//     textField.focus();
//   }

//   if(target.dataset.name === 'send'){

//     if(textField.value === '') return;

//     const template = /* html */ `
//       <div class="id">
//           <div class="profile_img border_over"><img src="./assets/part03/tigerr.png" alt="프로필사진"></div>
//           <div class="comment_field">
//               <div class="text_container">
//                   <div class="name"><a href="#">심심</a></div>
//                   <div class="text_field">${textField.value}</div>
//               </div>
//           </div>
//       </div>
//     `

//     insertLast(commentContainer,template);

//     commentContainer.scrollTop = commentContainer.scrollHeight;

//     textField.value = ''

//   }

// }

// content.addEventListener('click',handleClick)
