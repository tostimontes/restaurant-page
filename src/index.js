import { createInitialUI } from "./initial-load";
import { renderHomeTab } from "./home_tab";

// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

createInitialUI();
renderHomeTab();