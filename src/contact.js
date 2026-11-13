export function createContact() {
  const contactContainer = document.createElement("div");

  const contactBanner = document.createElement("div");
  contactBanner.classList.add("contact-banner", "page-banner");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact";
  contactBanner.appendChild(contactTitle);

  contactContainer.appendChild(contactBanner);

  const contactMap = document.createElement("iframe");
  contactMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0930024475488!2d-3.2116039233377918!3d51.52985400906283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b1ea7ba7ec5%3A0x9086a1484bac08f3!2sSuburban%20Coffee%20Shop%20and%20Delicatessen!5e0!3m2!1sen!2suk!4v1794566211646!5m2!1sen!2suk";
  contactMap.title = "Map showing Suburban cafe location";
  contactMap.loading = "lazy";
  contactMap.referrerPolicy = "strict-origin-when-cross-origin";
  contactMap.allowFullscreen = true;
  contactMap.classList.add("contact-map");
  contactContainer.appendChild(contactMap);

  const addressWrapper = document.createElement("address");
  addressWrapper.classList.add("address-wrapper");

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
  telephoneWrapper.classList.add("phone-info");

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
  openingTimesList.classList.add("opening-times");

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
