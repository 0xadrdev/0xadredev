import { LinkedList } from "./LinkedList.js";

// Create the list. 

const errorContainer = document.getElementById("error");

let linkedList = new LinkedList();

function createNode(data) {
  let newNodeContainer = Object.assign(document.createElement("div"), {className: "node-container", next: null});
  let newNodeDataContainer = Object.assign(document.createElement("div"), {className: "node-data"});
  let newNodeData = Object.assign(document.createElement("span"), {className: "data", innerText: data});
  let newNodeArrow = Object.assign(document.createElement("i"), {className: "fa-solid fa-arrow-right node-arrow"});
  newNodeDataContainer.append(newNodeData);
  newNodeContainer.appendChild(newNodeDataContainer);
  newNodeContainer.appendChild(newNodeArrow);
  return newNodeContainer;
}

function removeError() {
  errorContainer.classList.remove("show");
}

export function setError(errorText) {
  errorContainer.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errorText}`;
  errorContainer.classList.add("show");
  return true;
}

function checkErrors(type, str) {
  if (linkedList.processStarted) return setError("Wait until adding process is finished. ");

  if (type == "index" && str.trim() == "") return setError("Index must be a number. ");
  if (type == "index" && (str < 0 || str >= linkedList.length())) return setError("Index out of bounds. ");

  if (type == "data" && str.trim() == "") return setError("Data must be a number. ")

  removeError();
  return false; 
}

export async function addElement(data) {
  if (checkErrors("data", data)) return;

  let newNode = createNode(data); 
  await linkedList.add(newNode);
  removeError();
}

export async function setElement(index, data) {
  if (checkErrors("index", index) || checkErrors("data", data)) return;

  await linkedList.set(index, data);
  removeError();
}

export async function insertElement(index, data) {
  if (checkErrors("index", index) || checkErrors("data", data)) return;

  let newNode = createNode(data);
  await linkedList.insert(index, newNode);
  removeError();
}

export async function removeElementAtIndex(index) {
  if (checkErrors("index", index)) return;

  await linkedList.removeAtIndex(index);
  removeError();
}

export async function removeElementsWithData(data) {
  if (checkErrors("data", data)) return;

  await linkedList.remove(data);
  removeError();
}

