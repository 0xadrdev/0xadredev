import {setAnimationsDurations} from './settings.js'

export {nextNodeAnimation, newNodeAnimation, setNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container");

function nextNodeAnimation(nodeContainer) {
  return new Promise(resolve => {
    nodeContainer.classList.add("next-node");

    nodeContainer.onanimationend = e => {
      if (e.animationName == "nextArrowAnimation") {
        nodeContainer.classList.remove("next-node");
        resolve();
      }
    }
  })
}

function newNodeAnimation(nodeContainer) {
  return new Promise(resolve => {
    nodeContainer.classList.add("new-node");
    linkedListContainer.appendChild(nodeContainer);

    nodeContainer.onanimationend = e => {
      if (e.animationName == "newArrowAnimation") {
        nodeContainer.classList.remove("new-node");
        nodeContainer.children[1].style.setProperty("opacity", "1");
        resolve();
      }
    }
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

  return new Promise(resolve => {
    setTimeout(() => {
      nodeData.classList.remove("new-node-data");
      nodeArrow.classList.remove("new-node-arrow");
      nodeArrow.style.setProperty("opacity", "1");
      resolve();
    }, animationDuration);
  });
}

// Remove Animation 

export function removeNodeAnimation(nodeContainer) {
  let aux = nodeContainer.next;
  let durations = setAnimationsDurations();
  let animationDuration = durations.deleteAnimationDuration;
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

  return new Promise(resolve => {
    setTimeout(() => {
      nodeContainer.remove()
      // resolve();  
    }, animationDuration);
    setTimeout(resolve, animationDuration + durations.pointerAnimationDuration)
  })
} 