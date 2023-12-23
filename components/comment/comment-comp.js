let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="components/comment/comment-comp.css" />
<div class="comment">
  <div class="comment-content">
    <p class="comment__body">
      Life before Company was very chaotic we got a lot of phone
      calls, a lot of mistyped orders. So with Company, the
      ability to see the order directly from the customer makes it
      so streamlined.
    </p>
  </div>
  <div class="comment-info">
    <img src="images/person-1.png" alt="" class="comment__img" />
    <p class="comment__person">Martin Jones, Creative Cons</p>
  </div>
</div>  
`;

class Comment extends HTMLElement {
  constructor() {
    super();
    // 1- create shadow root
    this.attachShadow({ mode: "open" });
    // 2- add html code to shadow root( add shadow dom to shadow root )
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    // 1- handle attributes 2-handle events
    let commentBody = this.shadowRoot.querySelector('.comment__body');
    let userPicComment = this.shadowRoot.querySelector(".comment__img");
    let userNameComment = this.shadowRoot.querySelector(".comment__person");

    commentBody.innerHTML = this.getAttribute("comment-text-attr");
    userPicComment.src = this.getAttribute('userpic-attr');
    userNameComment.innerHTML = this.getAttribute('username-attr')

  }

  static get observedAttributes() {
    return ['comment-text-attr','username-attr','userpic-attr'];
  }
}

export { Comment };
