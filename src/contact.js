export function createContact() {
  const contactContainer = document.createElement("div");

  const contactBanner = document.createElement("div");
  contactBanner.classList.add("contact-banner", "page-banner");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact";
  contactBanner.appendChild(contactTitle);

  contactContainer.appendChild(contactBanner);

  const addressWrapper = document.createElement("address");

  const addressStreet = document.createElement("p");
  addressStreet.textContent = "105 Heol Llanishen Fach";
  addressWrapper.appendChild(addressStreet);

  const addressArea = document.createElement("p");
  addressArea.textContent = "Rhiwbina";
  addressWrapper.appendChild(addressArea);

  const addressCity = document.createElement("p");
  addressCity.textContent = "Cardiff";
  addressWrapper.appendChild(addressCity);

  const addressPostcode = document.createElement("p");
  addressPostcode.textContent = "CF14 6RE";
  addressWrapper.appendChild(addressPostcode);

  const telephoneWrapper = document.createElement("p");

  const telephoneNumber = document.createElement("a");
  telephoneNumber.href = "tel:02920180074";
  telephoneNumber.textContent = "029 2018 0074";
  telephoneWrapper.appendChild(telephoneNumber);
  addressWrapper.appendChild(telephoneWrapper);

  const socialWrapper = document.createElement("p");
  socialWrapper.textContent = "Follow us on Instagram ";

  const socialHandle = document.createElement("a");
  socialHandle.href = "https://www.instagram.com/suburban.rhiwbina/";
  socialHandle.textContent = "@suburban.rhiwbina";

  socialWrapper.appendChild(socialHandle);
  addressWrapper.appendChild(socialWrapper);

  contactContainer.appendChild(addressWrapper);

  const openingTimesHeading = document.createElement("h2");
  openingTimesHeading.textContent = "Opening Times";
  contactContainer.appendChild(openingTimesHeading);

  const openingTimesList = document.createElement("dl");

  const weekday = document.createElement("dt");
  weekday.textContent = "Monday - Friday";
  const weekdayTimes = document.createElement("dd");
  weekdayTimes.textContent = "9:00 - 15:00";
  openingTimesList.appendChild(weekday);
  openingTimesList.appendChild(weekdayTimes);

  const weekend = document.createElement("dt");
  weekend.textContent = "Saturday & Sunday";
  const weekendTimes = document.createElement("dd");
  weekendTimes.textContent = "9:00 - 13:00";
  openingTimesList.appendChild(weekend);
  openingTimesList.appendChild(weekendTimes);

  contactContainer.appendChild(openingTimesList);

  const contactContent = document.querySelector("#content");
  contactContent.appendChild(contactContainer);
}
