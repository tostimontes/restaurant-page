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
    navTabs.forEach(tab => {
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
})
