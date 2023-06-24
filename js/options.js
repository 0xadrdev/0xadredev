import {addElement, setElement} from "./main.js";

const addButton = document.getElementById("add-btn");
const setButton = document.getElementById("set-btn");

addButton.addEventListener("click", () => {
  let addContainer = addButton.parentElement; 
  let addDataInput = addContainer.querySelector("#data-input");
  addElement(addDataInput.value);
});

setButton.addEventListener("click", () => {
  let setContainer = setButton.parentElement;
  let setIndexInput = setContainer.querySelector("#index-input");
  let setDataInput = setContainer.querySelector("#data-input");
  setElement(setIndexInput.value, setDataInput.value);
})


