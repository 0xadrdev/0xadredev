import { LinkedList, Node } from "./LinkedList.js";

// Create the list. 

let linkedList = new LinkedList();
let newNode = new Node(10);


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

export function addElement(data) {
  let newNode = createNode(data); 
  linkedList.add(newNode);
}

export function setElement(index, data) {
  let newNode = createNode(data);
  linkedList.set(index, data);
}

