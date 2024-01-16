import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import allImages from "./image_bundler";


function renderContactTab() {
  const mainContainer = document.querySelector("#main_container");

  const addressDiv = createDOMElement("div", {class: "address"});
  const addressIcon = createDOMElement("div", {class: "address contact_icon", id: "address_icon"});
  addressIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker-radius</title><path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>`;
  const addressP = createDOMElement(
    "p",
    { class: "address" }
  );
  addressP.innerHTML = `Carrer del Castanyet, 53</br> 17430 Santa Coloma de Farners, Girona`;
  const map = createDOMElement("img", {class: "address", id: "address_map", src: `${allImages["armengol-map.png"]}`});

  const telDiv = createDOMElement("div", {class: "info_wrapper", id: "tel_div"});
  const telIcon = createDOMElement("div", {class: "info contact_icon", id: "tel_icon"});
  telIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>`;
  const telP = createDOMElement(
    "p",
    { class: "info info_p", id: "tel_p" },
    "972 84 06 96"
  );
  const hoursDiv = createDOMElement("div", {class: "info_wrapper", id: "hours_div"});
  const hoursIcon = createDOMElement("div", {class: "info contact_icon", id: "hours_icon"});
  hoursIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>timetable</title><path d="M14,12H15.5V14.82L17.94,16.23L17.19,17.53L14,15.69V12M4,2H18A2,2 0 0,1 20,4V10.1C21.24,11.36 22,13.09 22,15A7,7 0 0,1 15,22C13.09,22 11.36,21.24 10.1,20H4A2,2 0 0,1 2,18V4A2,2 0 0,1 4,2M4,15V18H8.67C8.24,17.09 8,16.07 8,15H4M4,8H10V5H4V8M18,8V5H12V8H18M4,13H8.29C8.63,11.85 9.26,10.82 10.1,10H4V13M15,10.15A4.85,4.85 0 0,0 10.15,15C10.15,17.68 12.32,19.85 15,19.85A4.85,4.85 0 0,0 19.85,15C19.85,12.32 17.68,10.15 15,10.15Z" /></svg>`;
  const hoursP = createDOMElement("p", {class: "info info_p", id: "hours_p"}, "Obert tots els dies de 8:30 a 15:30 i de 20:00 a 22:00. Tanquem diumenge nit.");
  const parkingDiv = createDOMElement("div", {class: "info_wrapper", id: "parking_div"});
  const parkingIcon = createDOMElement("div", {class: "info contact_icon", id: "parking_icon"});
  parkingIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>parking</title><path d="M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z" /></svg>`;
  const parkingP = createDOMElement(
    "p",
    { class: "info info_p", id: "parking_p" },
    "Disposem de pàrquing propi per als clients"
  );
  
  addressDiv.append(addressIcon, addressP, map);
  telDiv.append(telIcon, telP);
  hoursDiv.append(hoursIcon, hoursP);
  parkingDiv.append(parkingIcon, parkingP);

  mainContainer.append(addressDiv, telDiv, hoursDiv, parkingDiv);
  const contactTab = document.querySelector("#contact_tab");
  contactTab.classList.add("currentTab");
}

export { renderContactTab }