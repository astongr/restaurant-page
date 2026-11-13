import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const contentContainer = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

function clearContent() {
  contentContainer.innerHTML = "";
}

function removeActive() {
  homeButton.removeAttribute("aria-current");
  menuButton.removeAttribute("aria-current");
  contactButton.removeAttribute("aria-current");
}

homeButton.addEventListener("click", function () {
  clearContent();
  createHome();
  removeActive();
  homeButton.setAttribute("aria-current", "page");
});

menuButton.addEventListener("click", function () {
  clearContent();
  createMenu();
  removeActive();
  menuButton.setAttribute("aria-current", "page");
});

contactButton.addEventListener("click", function () {
  clearContent();
  createContact();
  removeActive();
  contactButton.setAttribute("aria-current", "page");
});

homeButton.setAttribute("aria-current", "page");
createHome();
