/* Import All Components And Define Them */
import { Comment } from "../components/comment/comment-comp.js";
customElements.define("comment-site", Comment);

import { Portfolio } from "../components/portfolio-item/porftolio-item-comp.js";
customElements.define("portfolio-site", Portfolio);

/* All Databases */
const commentsDb = [
  {
    id: 1,
    text: "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
    userPicUrl: "images/person-1.png",
    userName: "martin jones",
  },
  {
    id: 2,
    text: "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
    userPicUrl: "images/person-2.png",
    userName: "david clark",
  },
  {
    id: 3,
    text: "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
    userPicUrl: "images/person-3.png",
    userName: "john wick",
  },
];

const portfolioDb = [
  "images/portfolio-1.jpg",
  "images/portfolio-2.jpg",
  "images/portfolio-3.jpg",
  "images/portfolio-4.jpg",
  "images/portfolio-5.jpg",
  "images/portfolio-6.jpg",
];

/* Select All Elements */
const $ = document;
const headerTop = $.querySelector(".header-top");
const menu = $.querySelector(".menu");
const menuBtn = $.querySelector(".header__icon");
const menuBtnIcon = $.querySelector(".header__icon i");
const upBtn = $.querySelector(".up-btn");
const preloadingElem = $.querySelector(".preloadign-wrapper");
const allMenuLinks = $.querySelectorAll(".menu .menu-link");
const commentsWrapper = $.querySelector(".comments");
const portfolioWrapper = $.querySelector(".portfolio-items");

/* Scroll To Relative Section */
allMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault() // یهو میپره و رفرش میشه و این خوب نیست
    let targetElem = $.querySelector(`.${link.dataset.scrollTarget}`);

    if (targetElem) {
      targetElem.scrollIntoView(true)
    }
  });
});

/* Hide Preloading */
window.addEventListener("load", () => {
  preloadingElem.classList.add("hide-preloading");
});

menuBtn.addEventListener("click", (e) => {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menuBtnIcon.className = "fa-solid fa-xmark";
    menu.style.left = "0";
  } else {
    menuBtnIcon.className = "fa-solid fa-bars";
    menu.style.left = "-15rem";
  }
});

upBtn.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

/* Create Elemetns From Databases */
commentsDb.forEach((comment) => {
  commentsWrapper.insertAdjacentHTML(
    "beforeend",
    `<comment-site comment-text-attr="${comment.text}" userpic-attr="${comment.userPicUrl}" username-attr="${comment.userName}"></comment-site>`
  );
});

portfolioDb.forEach((portfolioItem) => {
  portfolioWrapper.insertAdjacentHTML(
    "beforeend",
    `<portfolio-site img-url-attr="${portfolioItem}"></portfolio-site>`
  );
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    console.log("scroll up");
    headerTop.style = "top : 0 ;box-shadow: 0 3px 1rem 0 rgba(0, 0, 0, 0.15)";
  } else {
    console.log("scroll down");
    headerTop.style = "top : -110px ;";
  }

  if (currentScrollPos == 0) {
    headerTop.style = "box-shadow:none";
  }

  prevScrollpos = currentScrollPos;
};
