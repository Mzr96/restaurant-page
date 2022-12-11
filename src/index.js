"use strict";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContacts from "./contact.js";

const navList = document.querySelector(".main-nav-list");

loadHome();
navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("home-btn")) loadHome();
  if (e.target.classList.contains("meals-btn")) loadMenu();
  if (e.target.classList.contains("pricing-btn")) loadContacts();
});
