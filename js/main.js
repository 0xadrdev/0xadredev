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
}

export async function addElement(data) {
  if (linkedList.processStarted) return setError("Wait until adding process is finished. ")
  if (data.trim() == "") return setError("Data must be a number. ");
  removeError();
  let newNode = createNode(data); 
  await linkedList.add(newNode);
  removeError();
}

export async function setElement(index, data) {
  if (linkedList.processStarted) return setError("Wait until setting process is finished. ")
  if (index.trim() == "") {
    return setError("Index must be a number. ");
  } else if (index < 0 || index >= linkedList.length()) {
    return setError("Index out of bounds. ");
  } else if (data.trim() == ""){
    return setError("Data must be a number. ");
  }
  removeError();
  await linkedList.set(index, data);
  removeError();
}

export async function insertElement(index, data) {
  if (linkedList.processStarted) return setError("Wait until inserting process is finished. ")
  if (index.trim() == "") {
    return setError("Index must be a number. ");
  } else if (index < 0 || index >= linkedList.length()) {
    return setError("Index out of bounds. ");
  } else if (data.trim() == ""){
    return setError("Data must be a number. ");
  }
  removeError();
  let newNode = createNode(data);
  await linkedList.insert(index, newNode);
  removeError();
}

export async function removeElementAtIndex(index) {
  if (linkedList.processStarted) return setError("Wait until removing process is finished. ")
  if (index.trim() == "") {
    return setError("Index must be a number. ");
  } else if (index < 0 || index >= linkedList.length()) {
    return setError("Index out of bounds. ");
  } 
  removeError();
  await linkedList.removeAtIndex(index);
  removeError();
}

export async function removeElementsWithData(data) {
  if (linkedList.processStarted) return setError("Wait until removing process is finished. ")
  if (data.trim() == "") {
    return setError("Data must be a number. ");
  } else if (linkedList.length() == 0) {
    return setError("List is empty. ");
  }
  removeError();
  await linkedList.remove(data);
  removeError();
}

