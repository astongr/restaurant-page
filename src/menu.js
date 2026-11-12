import latteImage from "./images/latte.jpg";
import placeholderImage from "./images/menu.jpg";

const items = [
  { name: "Latte", price: "£3.50", image: latteImage },
  { name: "Hot Chocolate", price: "£4.50", image: placeholderImage },
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

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuContainer.appendChild(menuTitle);

  items.forEach(function (itemOption) {
    const menuCard = createMenuCard(itemOption);
    menuContainer.appendChild(menuCard);
  });

  const menuContent = document.querySelector("#content");
  menuContent.appendChild(menuContainer);
}
