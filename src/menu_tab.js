import createDOMElement from "./initial-load.js";
import allImages from "./image_bundler";

function renderMenuTab() {
  const mainContainer = document.querySelector("#main_container");
  const menuGrid = createDOMElement("div", { class: "menu", id: "menu_grid" });
  const menu = [
    {
      name: "Galtes de porc a la brasa",
      price: "12,5€",
      description: "Un clàssic de la casa, amb allioli i patates",
      img: "",
    },
    {
      name: "Pintxo moruno",
      price: "8,0€",
      description: "Espet de carn especiada, acompanyat de salsa brava",
      img: "",
    },
    {
      name: "Cargols a la llauna",
      price: "14€",
      description: "Cargols cuinats a la llauna amb all i julivert",
      img: "",
    },
    {
      name: "Macarrons cassolans",
      price: "10€",
      description: "Macarrons amb salsa de tomàquet casolana i carn picada",
      img: "",
    },
    {
      name: "Arròs de muntanya",
      price: "13€",
      description: "Arròs amb conill, botifarra i verdures del hort",
      img: "",
    },
    {
      name: "Botifarra amb mongetes",
      price: "11€",
      description: "Botifarra tradicional amb mongetes del ganxet",
      img: "",
    },
    {
      name: "Escudella i carn d'olla",
      price: "12€",
      description: "Sopa robusta amb carn, botifarres i verdures",
      img: "",
    },
    {
      name: "Bacallà a la llauna",
      price: "14€",
      description: "Bacallà al forn amb tomàquet, all i julivert",
      img: "",
    },
    {
      name: "Canelons de rostit",
      price: "10€",
      description: "Canelons farcits de carn de rostit amb beixamel gratinada",
      img: "",
    },
    {
      name: "Fideuà de marisc",
      price: "16€",
      description: "Fideus torrats amb gambes, cloïsses i calamar",
      img: "",
    },
    {
      name: "Peus de porc a la brasa",
      price: "13,5€",
      description: "Peus de porc cuinats lentament amb allioli i patates",
      img: "",
    },
    {
      name: "Trinxat de la Cerdanya",
      price: "9€",
      description: "Plat de col i patata amb talls de panceta",
      img: "",
    },
  ];
  for (let index = 0; index < 12; index++) {
    const menuItem = createDOMElement("div", {
      class: "menu menu_item",
      id: `item_${index}`,
    });
    const priceAndDescription = createDOMElement("div", {
      class: "menu price_and_description",
    });
    const itemTitle = createDOMElement(
      "h3",
      { class: "menu menu_item_title" },
      `${menu[index].name}`
    );
    const itemPrice = createDOMElement(
      "p",
      { class: "menu menu_item_price" },
      `${menu[index].price}`
    );
    const itemDescription = createDOMElement(
      "p",
      { class: "menu menu_item_description" },
      `${menu[index].description}`
    );
    index % 2 !== 0
      ? (menuItem.classList.add("left_aligned"),
        itemTitle.classList.add("left_aligned"))
      : null;
    priceAndDescription.append(itemPrice, itemDescription);
    menuItem.append(itemTitle, priceAndDescription);
    mainContainer.appendChild(menuItem);
  }
  const menuCard = createDOMElement(
    "div",
    { class: "menu card", id: "id" },
    "text content"
  );

  mainContainer.append(menuGrid);

  const menuTab = document.querySelector("#menu_tab");
  menuTab.classList.add("currentTab");
}

export { renderMenuTab };
