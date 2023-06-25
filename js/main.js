import { LinkedList, Node } from "./LinkedList.js";

// Create the list. 

const errorContainer = document.getElementById("error")
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

function setError(errorText) {
  errorContainer.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errorText}`;
  errorContainer.classList.add("show");
}

export function addElement(data) {
  if (data.trim() == "") return setError("Data must be a number. ");
  removeError();
  let newNode = createNode(data); 
  linkedList.add(newNode);
}

export function setElement(index, data) {
  if (index.trim() == "") {
    return setError("Index must be a number. ");
  } else if (index < 0 || index >= linkedList.length()) {
    return setError("Index out of bounds. ");
  } else if (data.trim() == ""){
    return setError("Data must be a number. ");
  }
  removeError();
  console.log(linkedList.length());
  linkedList.set(index, data);
}

