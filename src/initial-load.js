import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import "./style.css";
import allImages from "./image_bundler";


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
  const mainDiv = createDOMElement("div", { id: "main_div" });
  const mainContainer = createDOMElement("div", { id: "main_container"});
  const testP = createDOMElement(
    "p",
    { class: "", id: "test_p" },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori\ns nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est l id est loluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia\n m, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  );
  const footer = createDOMElement("footer", { id: "footer"}, "by ");
  const nameSpan = createDOMElement("span", {class: "footer", id: "name_span"}, "tostimontes");
  const githubLink = createDOMElement(
    "a",
    { href: "https://github.com/tostimontes/restaurant-page" }
  );
  const githubIcon = createDOMElement("i", {class: "fab fa-github"});

  //   const porkFeet = createDOMElement("img", {src: `${allImages['raw-pork-feet.jpg']}`, id: "test_img"}, "");
  // porkFeet.innerHTML = `<a href="https://www.freepik.com/free-photo/raw-pork-legs-white-background_1206301.htm#query=pies%20de%20cerdo&position=4&from_view=search&track=ais&uuid=2d87da32-4828-4f3e-832b-0d95079e06b8">Image by whatwolf</a> on Freepik`;
  //   const gironaInterior = createDOMElement("img", {src: `${allImages['raw-pork-feet.jpg']}`, id: "test_img"}, "");
  // gironaInterior.innerHTML = `<a href="https://www.freepik.com/free-photo/old-catalan-village-castellar-de-la-ribera_1469621.htm#query=castell&position=45&from_view=search&track=sph&uuid=2252c821-7baa-4e57-9bef-da7cf873a1eb">Image by bearfotos</a> on Freepik`;

  navbar.append(homeTab, menuTab, contactTab);
  header.append(heroTitle, navbar);
  // mainContainer.append(testP);
  mainDiv.append(mainContainer, footer)
  githubLink.append(githubIcon);
  footer.append(nameSpan, githubLink)

  const body = document.querySelector("body");
  const head = document.querySelector("head");
  head.append(falink);
  body.append(header, mainDiv);
}

export { createInitialUI };