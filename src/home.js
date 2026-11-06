export function createHome() {
  const homeContainer = document.createElement("div");

  const homeTitle = document.createElement("h1");
  homeTitle.textContent = "Suburban";
  homeContainer.appendChild(homeTitle);

  const homeTagline = document.createElement("p");
  homeTagline.textContent = "Rhiwbina's front room";
  homeContainer.appendChild(homeTagline);

  const homeIntro = document.createElement("p");
  homeIntro.textContent =
    "Tucked into the heart of Rhiwbina, Suburban serves freshly brewed coffee, warm food from the kitchen and a deli salad bar packed with fresh, seasonal favourites.";
  homeContainer.appendChild(homeIntro);

  const homeWelcome = document.createElement("p");
  homeWelcome.textContent =
    "Whether you're a daily regular or just passing by on a walk, there's always a seat for you, and for the dog too. Four-legged friends are always welcome.";
  homeContainer.appendChild(homeWelcome);

  const homeContent = document.querySelector("#content");
  homeContent.appendChild(homeContainer);
}
