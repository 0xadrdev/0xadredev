import { LinkedList, Node } from "./LinkedList.js";

const linkedListContainer = document.getElementById("linked-list-container");

// Create the list. 

let list = new LinkedList();
let newNode = new Node(10);

list.add(newNode);
console.log(list.toString());

// TODO: There is a function called Object... test it.  

function createNode(data) {
  let newNodeContainer = document.createElement("div");
  let newNodeData = document.createElement("div");
  let newNodeArrow = document.createElement("i");
  newNodeContainer.className = "node-container";
  newNodeData.className = "node-data";
  newNodeArrow.className = "fa-solid fa-arrow-right node-arrow";
  newNodeData.innerText = data;
  newNodeContainer.appendChild(newNodeData);
  newNodeContainer.appendChild(newNodeArrow);
  return newNodeContainer;
}


export function addElement(data) {
  linkedListContainer.appendChild(createNode(data));
}


