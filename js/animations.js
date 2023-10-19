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
    nodeContainer.onanimationend = e => {
      if (e.animationName == "removeNodeDataAnimation") {
        dataSpan.remove();
        nodeData.appendChild(newDataSpan);
      } else {
        newDataSpan.classList.remove("show-data");
        resolve();
      }
    }
  });
}

// Insert Animation 

export function insertNodeAnimation(previousNode, nodeContainer) {
  return new Promise(resolve => {
    nodeContainer.classList.add("new-node");
    nodeContainer.onanimationend = e => {
      if (e.animationName == "newArrowAnimation") {
        nodeContainer.classList.remove("new-node");
        nodeContainer.children[1].style.setProperty("opacity", "1");
        resolve();
      }
    }
    
    let aux = previousNode; 
    while (aux != null) {
      aux.classList.add("translate");
      aux.onanimationend = e => {
        e.target.classList.remove("translate");
        linkedListContainer.insertBefore(nodeContainer, previousNode);
      }
      aux = aux.next;
    } 
  });
}

// Remove Animation 

export function removeNodeAnimation(nodeContainer) {
  return new Promise(resolve => {
    let aux = nodeContainer.next;
    nodeContainer.classList.add("remove-node");

    nodeContainer.onanimationend = () => {
      while (aux != null) {
        aux.classList.add("translate-reverse");
        aux.onanimationend = e => {
          e.target.classList.remove("translate-reverse");
          if (e.target.next == null) { 
            resolve();
          }
        };
        aux = aux.next;
      }
      nodeContainer.remove();
    }
  });
} 