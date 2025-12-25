"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnsOpenModal.forEach((modal) => modal.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// scrolling effect

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation

// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// better solution

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));
/////////////////////////////////////////

// Selecting, Creating, and Deleting Elements

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// // Creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// ///////////////////////////////////////
// // Styles, Attributes and Classes

// // Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// // Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c"); // not includes

// // Don't use
// logo.clasName = "jonas";

//////////////////////////

// bubbling test

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Link", e.target, e.currentTarget);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Container", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Nav", e.target, e.currentTarget);
// });

// traversing

// const h1 = document.querySelector("h1");

// // going downwards: child

// console.log(h1.querySelectorAll(".highlight"));
// // console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// // going sideways: sibilings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });
