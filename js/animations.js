import {setAnimationsDurations} from './settings.js'

export {nextNodeAnimation, newNodeAnimation, setNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container");

function nextNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  let durations = setAnimationsDurations();

  nodeData.classList.remove("next-node-data");
  nodeArrow.classList.remove("next-node-arrow");

  setTimeout(() => { // Timeout for removing the list. 
    nodeData.classList.add("next-node-data");
    nodeArrow.classList.add("next-node-arrow");
  }, 10);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, durations.pointerAnimationDuration + durations.nodeAnimationDuration);
  })
}

function newNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  let durations = setAnimationsDurations();

  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");
  linkedListContainer.appendChild(nodeContainer);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nodeData.classList.remove("new-node-data");
      nodeArrow.classList.remove("new-node-arrow");
      nodeArrow.style.setProperty("opacity", "1");
      resolve();
    }, durations.nodeAnimationDuration + durations.pointerAnimationDuration);
  }) 
}

// Set Animation

function setNodeAnimation(nodeContainer, data) {
  let newDataSpan = Object.assign(document.createElement("span"), {className: "data show-data", innerText: data});
  let nodeData = nodeContainer.querySelector(".node-data");
  let dataSpan = nodeContainer.querySelector(".data");

  dataSpan.classList.add("remove-data");

  return new Promise(resolve => {
    setTimeout(() => {
      dataSpan.remove();
      nodeData.appendChild(newDataSpan);
    }, 1000);
    setTimeout(() => {
      newDataSpan.style.setProperty("transform", "scale(1)");
      newDataSpan.classList.remove("show-data");
      resolve();
    }, 2000);
  });

}

// Insert Animation 

export function insertNodeAnimation(previousNode, nodeContainer) {
  let durations = setAnimationsDurations();
  let animationDuration = durations.pointerAnimationDuration;
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");

  let aux = previousNode; 
  while (aux != null) {
    aux.classList.add("translate");
    setTimeout(aux => aux.classList.remove("translate"), animationDuration, aux);
    aux = aux.next;
  } 

  setTimeout(() => {
    linkedListContainer.insertBefore(nodeContainer, previousNode);
  }, animationDuration);

  animationDuration = (animationDuration * 2) + durations.nodeAnimationDuration;

  setTimeout(() => {
    nodeData.classList.remove("new-node-data");
    nodeArrow.classList.remove("new-node-arrow");
    nodeArrow.style.setProperty("opacity", "1");
  }, animationDuration);
}

// Remove Animation 

export function removeNodeAnimation(nodeContainer) {
  let aux = nodeContainer.next;
  let durations = setAnimationsDurations();
  let animationDuration = durations.deleteAnimationDuration;
  // let animationDuration = 1660;
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.add("remove-node");
  nodeArrow.classList.add("remove-node");

  setTimeout(() => {
    while (aux != null) {
      aux.classList.add("translate-reverse");
      setTimeout(aux => aux.classList.remove("translate-reverse"), durations.pointerAnimationDuration, aux);
      aux = aux.next;
    }
  }, animationDuration);
  setTimeout(() => nodeContainer.remove(), animationDuration);
} 