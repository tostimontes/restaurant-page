import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import allImages from "./image_bundler";


function renderHomeTab() {
    const historyDiv = createDOMElement("div", { class: "content_div", id: "history_div"});
    const historyTitle = createDOMElement("h2", {class: "history titles", id: "history_title"}, "La nostra història");
    const historyP = createDOMElement(
      "p",
      { class: "history text", id: "history_p" },
      "L'avia Carme va inaugurar un petit restaurant familiar a Santa Coloma de Farners, un lloc arrelat en la tradició culinària local, amb una especialitat en cuina a la brasa. Amb el pas del temps, el restaurant ha esdevingut un símbol de la gastronomia de la regió, destacant-se per l'ús de productes frescos i receptes tradicionals. Avui, l'establiment és dirigit per Carme, el seu fill Josep, i la seva esposa Dolors. Junts, mantenen l'essència de la cuina casolana de la zona, oferint als visitants una experiència autèntica de la cultura i la història de Santa Coloma de Farners."
    );
    const historyImg = createDOMElement("img", {
      class: "history images",
      id: "history_img",
      src: `${allImages["Escut_de_Santa_Coloma_de_Farners.svg"]}`,
    });

    const restaurantDiv = createDOMElement("div", {class: "content_div", id: "restaurant_div"});
    const restaurantTitle = createDOMElement("h2", {class: "restaurant titles", id: "restaurant_title"}, "El restaurant");
    const restaurantP = createDOMElement("p", {class: "restaurant text", id: "restaurantP"}, "El restaurant, situat en el cor de Santa Coloma de Farners, és un racó ple de caliu i història. Disposa de dues sales aclimatades, decorades amb mantels roses que evoquen temps passats, plens de memòries i històries compartides. Aquestes sales, on ressona de fons el telenotícies, són un refugi on els clients poden sentir-se com a casa.\nA l'exterior, l'ample terrassa del restaurant ofereix un espai acollidor i obert, ideal per gaudir de l'ambient tranquil del poble. Aquí, els animals de companyia són benvinguts.");
    const restaurantImg = createDOMElement("img", {class: "restaurant images", id: "restaurant_img", src: `${allImages["restaurant-tables.jpg"]}`});
    
    const brasaDiv = createDOMElement("div", {class: "content_div", id: "brasa_div"});
    const brasaTitle = createDOMElement("h2", {class: "brasa titles", id: "brasa_title"}, "La brasa");
    const brasaP = createDOMElement(
      "p",
      { class: "brasa text", id: "brasaP" },
      "La brasa és l'especialitat de la casa, envoltant cada àpat d'un aroma captivador i un gust inoblidable. Delícies com el pintxo, els peus de porc i la galta, cuinats lentament sobre la brasa, són la joia de la corona del menú."
    );
    const brasaImg = createDOMElement("img", {class: "brasa images", id: "brasa_img", src: `${allImages["grill.jpg"]}`});

    const mainContainer = document.querySelector("#main_container");

    historyDiv.append(historyP, historyImg);
    restaurantDiv.append(restaurantP, restaurantImg);
    brasaDiv.append(brasaP, brasaImg);
    mainContainer.append(historyTitle, historyDiv, restaurantTitle, restaurantDiv, brasaTitle, brasaDiv);
}

export { renderHomeTab };