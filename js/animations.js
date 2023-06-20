
export {nextNodeAnimation, newNodeAnimation};

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
  }, 1650)
}
