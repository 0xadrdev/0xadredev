import {addElement, setElement, insertElement} from "./main.js";

const addButton = document.getElementById("add-btn");
const setButton = document.getElementById("set-btn");
const insertButton = document.getElementById("insert-btn");

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
});

insertButton.addEventListener("click", () => {
  let insertContainer = insertButton.parentElement;
  let insertIndexInput = insertContainer.querySelector("#index-input");
  let insertDataInput = insertContainer.querySelector("#data-input");
  insertElement(insertIndexInput.value, insertDataInput.value);
})


