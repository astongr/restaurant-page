const latteOption = { name: "Latte", price: "£3.50" };
const hotChocolateOption = { name: "Hot Chocolate", price: "£4.50" };

function createMenuCard(menuOption) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const name = document.createElement("h3");
  name.textContent = menuOption.name;
  name.classList.add("menu-option-name");

  const price = document.createElement("p");
  price.textContent = menuOption.price;
  price.classList.add("menu-option-price");

  card.appendChild(name);
  card.appendChild(price);
  return card;
}

export function createMenu() {
  const menuContainer = document.createElement("div");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuContainer.appendChild(menuTitle);

  const latteCard = createMenuCard(latteOption);
  menuContainer.appendChild(latteCard);

  const hotChocolateCard = createMenuCard(hotChocolateOption);
  menuContainer.appendChild(hotChocolateCard);

  const menuContent = document.querySelector("#content");
  menuContent.appendChild(menuContainer);
}
