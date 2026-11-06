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

homeButton.addEventListener("click", function () {
  clearContent();
  createHome();
});

menuButton.addEventListener("click", function () {
  clearContent();
  createMenu();
});

contactButton.addEventListener("click", function () {
  clearContent();
  createContact();
});

createHome();
