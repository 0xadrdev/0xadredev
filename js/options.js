import {addElement} from "./main.js";

const addButton = document.getElementById("add-btn");
const addIndexInput = document.getElementById("add-index-input");
const addDataInput = document.getElementById("add-data-input");

addButton.addEventListener("click", () => {
  addElement(addDataInput.value);
});
