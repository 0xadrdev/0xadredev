import { LinkedList, Node } from "./LinkedList.js";

// Create the list. 

let linkedList = new LinkedList();
let newNode = new Node(10);


function createNode(data) {
  let newNodeContainer = Object.assign(document.createElement("div"), {className: "node-container", next: null});
  let newNodeData = Object.assign(document.createElement("div"), {className: "node-data", innerText: data});
  let newNodeArrow = Object.assign(document.createElement("i"), {className: "fa-solid fa-arrow-right node-arrow"});
  newNodeContainer.appendChild(newNodeData);
  newNodeContainer.appendChild(newNodeArrow);
  return newNodeContainer;
}

export function addElement(data) {
  let newNode = createNode(data); 
  linkedList.add(newNode);
}


