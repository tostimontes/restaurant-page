import "./style.css";
import allImages from "./image_bundler";

function createDOMElement(type, attributes, text) {
  const element = document.createElement(`${type}`);

  for (const property in attributes) {
    element.setAttribute(property, attributes[property]);
  }

  element.textContent = text;

  return element;
}


function createInitialUI() {
  const falink = createDOMElement(
    "link",
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
    }
  );
  const heroTitle = createDOMElement(
    "h1",
    {
      id: "hero_title",
    },
    "Bar Armengol"
  );
  const headerPhotoCredit = createDOMElement("p", {
    class: "image_credit",
    id: "header_image_credit",
  });
  const header = createDOMElement("div", { id: "header" });
  const navbar = createDOMElement("div", { id: "navbar" });
  const homeTab = createDOMElement(
    "div",
    { class: "nav_tabs underline_animation", id: "home_tab" },
    "El Restaurant"
  );
  const menuTab = createDOMElement(
    "div",
    { class: "nav_tabs underline_animation", id: "menu_tab" },
    "Els nostres plats"
  );
  const contactTab = createDOMElement(
    "div",
    { class: "nav_tabs underline_animation", id: "contact_tab" },
    "Contacte"
  );
  const mainDiv = createDOMElement("div", { id: "main_div" });
  const mainContainer = createDOMElement("div", { id: "main_container"});
  const footer = createDOMElement("footer", { id: "footer"}, "by ");
  const nameSpan = createDOMElement("span", {class: "footer", id: "name_span"}, "tostimontes");
  const githubLink = createDOMElement(
    "a",
    { href: "https://github.com/tostimontes/restaurant-page" }
  );
  const githubIcon = createDOMElement("i", {class: "fab fa-github"});

  navbar.append(homeTab, menuTab, contactTab);
  header.append(heroTitle, navbar);
  mainDiv.append(mainContainer, footer)
  githubLink.append(githubIcon);
  footer.append(nameSpan, githubLink)

  const body = document.querySelector("body");
  const head = document.querySelector("head");
  head.append(falink);
  body.append(header, mainDiv);
}

export { createInitialUI, createDOMElement };