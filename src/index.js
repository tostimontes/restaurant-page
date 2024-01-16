import { createInitialUI } from "./initial-load";
import { renderHomeTab } from "./home_tab";
import { renderMenuTab } from "./menu_tab";
import { renderContactTab } from "./contact_tab";

createInitialUI();
renderHomeTab();

const mainContainer = document.querySelector("#main_container");
const navbar = document.querySelector("#navbar");
const navTabs = document.querySelectorAll(".nav_tabs");

navbar.addEventListener("click", (e) => {
  if (!e.target.classList.contains("nav_tabs")) {
    return;
  } else {
    navTabs.forEach((tab) => {
      tab.classList.remove("currentTab");
    });
    mainContainer.innerHTML = "";
    switch (e.target.id) {
      case "home_tab":
        renderHomeTab();
        break;
      case "menu_tab":
        renderMenuTab();
        break;
      case "contact_tab":
        renderContactTab();
        break;
      default:
        break;
    }
  }
});

// // RESTAURANT
// <a href="https://www.freepik.com/free-photo/classic-luxury-style-restaurant-with-tables-chairs_7873442.htm#query=classic%20restaurant&position=1&from_view=search&track=ais&uuid=878c5e1a-7fe0-4460-a710-c438972a470e">Image by KamranAydinov</a> on Freepik

// // GRILL
// Foto de cabecera <a href="https://unsplash.com/de/@ghorich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Danny de Jong</a> en <a href="https://unsplash.com/es/fotos/foto-de-primer-plano-de-la-hoguera-Np5GnOfsfo0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

// // GIRONA TOWN
// <a href="https://www.freepik.com/free-photo/old-catalan-village-castellar-de-la-ribera_1469621.htm#query=castell&position=45&from_view=search&track=sph&uuid=2252c821-7baa-4e57-9bef-da7cf873a1eb">Image by bearfotos</a> on Freepik

// // PORK FEET
// <a href="https://www.freepik.com/free-photo/raw-pork-legs-white-background_1206301.htm#query=pies%20de%20cerdo&position=4&from_view=search&track=ais&uuid=2d87da32-4828-4f3e-832b-0d95079e06b8">Image by whatwolf</a> on Freepik
