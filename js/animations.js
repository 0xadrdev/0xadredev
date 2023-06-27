
export {nextNodeAnimation, newNodeAnimation, setNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container")

function nextNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.remove("next-node-data");
  nodeArrow.classList.remove("next-node-arrow");
  
  setTimeout(() => {
    nodeData.classList.add("next-node-data");
    nodeArrow.classList.add("next-node-arrow");
  }, 100)

}

function newNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");
  linkedListContainer.appendChild(nodeContainer);

  setTimeout(() => {
    nodeData.classList.remove("new-node-data");
    nodeArrow.classList.remove("new-node-arrow");
    nodeArrow.style.setProperty("opacity", "1");
  }, 1650);
}

// Set Animation

function setNodeAnimation(nodeContainer, data) {
  let newDataSpan = Object.assign(document.createElement("span"), {className: "data show-data", innerText: data});
  let nodeData = nodeContainer.querySelector(".node-data");
  let dataSpan = nodeContainer.querySelector(".data");
  dataSpan.classList.add("remove-data");
  setTimeout(() => {
    dataSpan.remove();
    nodeData.appendChild(newDataSpan);
  }, 1000);
  setTimeout(() => {
    newDataSpan.style.setProperty("transform", "scale(1)");
    newDataSpan.classList.remove("show-data");
  }, 2000);
}

// Insert Animation 

export function insertNodeAnimation(previousNode, nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");

  // previousNode.style.setProperty("transform", "translate(189px)");

  let aux = previousNode; 
  while (aux != null) {
    aux.style.setProperty("transition", "transform 500ms");
    aux.style.setProperty("transform", "translate(189px)");
    aux = aux.next;
  } 
  aux = previousNode;
  setTimeout(() => {
    while (aux != null) {
      aux.style.setProperty("transition", "none");
      aux.style.setProperty("transform", "translate(0)");
      aux = aux.next;
    } 
    linkedListContainer.insertBefore(nodeContainer, previousNode);
  }, 500);

  setTimeout(() => {
    nodeData.classList.remove("new-node-data");
    nodeArrow.classList.remove("new-node-arrow");
    nodeArrow.style.setProperty("opacity", "1");
  }, 1650 + 500);
}

// Remove Animation 

export function removeNodeAnimation(nodeContainer) {
  let aux = nodeContainer.next;
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  nodeData.classList.add("remove-node");
  nodeArrow.classList.add("remove-node");
  setTimeout(() => nodeContainer.remove(), 1000);
  setTimeout(() => {
    while (aux != null) {
      aux.style.setProperty("transition", "none");
      aux.style.setProperty("transform", "translate(189px)");
      console.log(aux);
      aux = aux.next;
    }
  }, 1000);
  setTimeout(() => {
    aux = nodeContainer.next;
    while (aux != null) {
      aux.style.setProperty("transition", "transform 500ms");
      aux.style.setProperty("transform", "translate(0)");
      aux = aux.next;
    }
  }, 1050);
} 