import latteImage from "./images/latte.jpg";
import hotChocolateImage from "./images/hot-chocolate.jpg";
import americanoImage from "./images/americano.jpg";
import toastieImage from "./images/toastie.jpg";
import poachedEggsImage from "./images/poached-eggs.jpg";
import shakshukaImage from "./images/shakshuka.jpg";

const items = [
  { name: "Latte", price: "£3.50", image: latteImage },
  { name: "Hot Chocolate", price: "£4.50", image: hotChocolateImage },
  { name: "Americano", price: "£3.00", image: americanoImage },
  { name: "Ham and Cheese Toastie", price: "£5.00", image: toastieImage },
  { name: "Poached Eggs on Toast", price: "£6.00", image: poachedEggsImage },
  { name: "Shakshuka", price: "£7.50", image: shakshukaImage },
];

function createMenuCard(menuOption) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const image = document.createElement("img");
  image.src = menuOption.image;
  image.alt = menuOption.name;
  image.classList.add("menu-option-image");

  const name = document.createElement("h3");
  name.textContent = menuOption.name;
  name.classList.add("menu-option-name");

  const price = document.createElement("p");
  price.textContent = menuOption.price;
  price.classList.add("menu-option-price");

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);
  return card;
}

export function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuGridContainer = document.createElement("div");
  menuGridContainer.classList.add("menu-grid-container");

  const menuBanner = document.createElement("div");
  menuBanner.classList.add("menu-banner", "page-banner");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuBanner.appendChild(menuTitle);

  items.forEach(function (itemOption) {
    const menuCard = createMenuCard(itemOption);
    menuGridContainer.appendChild(menuCard);
  });

  menuContainer.appendChild(menuBanner);
  menuContainer.appendChild(menuGridContainer);

  const menuContent = document.querySelector("#content");
  menuContent.appendChild(menuContainer);
}
