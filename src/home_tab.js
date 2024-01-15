import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import allImages from "./image_bundler";


function renderHomeTab() {
    const historyDiv = createDOMElement("div", { id: "history"});
    const historyTitle = createDOMElement("h2", {class: "history", id: "history_title"}, "La nostra història");
    const historyP = createDOMElement(
      "p",
      { class: "history", id: "history_p" },
      "L'avia Carme va inaugurar un petit restaurant familiar a Santa Coloma de Farners, un lloc arrelat en la tradició culinària local, amb una especialitat en cuina a la brasa. Amb el pas del temps, el restaurant ha esdevingut un símbol de la gastronomia de la regió, destacant-se per l'ús de productes frescos i receptes tradicionals. Avui, l'establiment és dirigit per Carme, el seu fill Josep, i la seva esposa Dolors. Junts, mantenen l'essència de la cuina casolana de la zona, oferint als visitants una experiència autèntica de la cultura i la història de Santa Coloma de Farners."
    );
    const historyImg = createDOMElement("img", {
      class: "history",
      id: "history_img",
      src: `${allImages["Escut_de_Santa_Coloma_de_Farners.svg"]}`,
    });

    const mainContainer = document.querySelector("#main_container");

    historyDiv.append(historyP, historyImg);
    mainContainer.append(historyTitle, historyDiv);
    
}

export { renderHomeTab };