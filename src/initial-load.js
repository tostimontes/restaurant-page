import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import "./style.css";
const images = require.context(
  "../media",
  false,
  /\.(jpeg|jpg|png|gif)$/
);

// media folder "bundler"
const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    images[item.replace("./", "")] = context(item);
  });
  return images;
};

const allImages = importAllImages(images);




function createInitialUI() {
  const restaurantTitle = createDOMElement(
    "h1",
    {
      class: "restaurant_title",
      id: "restaurant_title",
    },
    "Bar Armengol"
  );
  const headerPhotoCredit = createDOMElement("p", {
    class: "image_credit",
    id: "header_image_credit",
  });
  headerPhotoCredit.innerHTML = `Foto de cabecera <a href="https://unsplash.com/de/@ghorich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Danny de Jong</a> en <a href="https://unsplash.com/es/fotos/foto-de-primer-plano-de-la-hoguera-Np5GnOfsfo0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    `;


  const header = createDOMElement("div", { id: "header" });
  const navbar = createDOMElement("div", { id: "navbar" });
  const homeTab = createDOMElement(
    "div",
    { class: "nav_tabs", id: "home_tab" },
    "El Restaurant"
  );
  const menuTab = createDOMElement(
    "div",
    { class: "nav_tabs", id: "menu_tab" },
    "Els nostres plats"
  );
  const contactTab = createDOMElement(
    "div",
    { class: "nav_tabs", id: "contact_tab" },
    "Contacte"
  );
  const mainDiv = createDOMElement("div", { class: "main", id: "main_div" });

  //   const porkFeet = createDOMElement("img", {src: `${allImages['raw-pork-feet.jpg']}`, id: "test_img"}, "");
  // porkFeet.innerHTML = `<a href="https://www.freepik.com/free-photo/raw-pork-legs-white-background_1206301.htm#query=pies%20de%20cerdo&position=4&from_view=search&track=ais&uuid=2d87da32-4828-4f3e-832b-0d95079e06b8">Image by whatwolf</a> on Freepik`;
  //   const gironaInterior = createDOMElement("img", {src: `${allImages['raw-pork-feet.jpg']}`, id: "test_img"}, "");
  // gironaInterior.innerHTML = `<a href="https://www.freepik.com/free-photo/old-catalan-village-castellar-de-la-ribera_1469621.htm#query=castell&position=45&from_view=search&track=sph&uuid=2252c821-7baa-4e57-9bef-da7cf873a1eb">Image by bearfotos</a> on Freepik`;

  navbar.append(homeTab, menuTab, contactTab);
  header.append(restaurantTitle, navbar);

  const body = document.querySelector("body");
  body.append(header, mainDiv);
}

export { createInitialUI, allImages };
